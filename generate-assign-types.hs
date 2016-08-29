{-# LANGUAGE ScopedTypeVariables #-}

module Main where

import Text.Printf
import Data.List
import Data.Char

letters :: [String]
letters =
  [ "A"
  , "B"
  , "C"
  , "D"
  , "E"
  , "F"
  , "G"
  ]

type Printer = [String] -> String

_args :: [String] -> [String]
_args =
  fmap argify
  where
    lc xs = [toLower x | x <- xs]
    argify x = lc x ++ ": " ++ x

printType :: Printer
printType xs =
  printf
    "assign<%s>(%s): %s;"
    params
    args
    result
  where
    params :: String = intercalate ", " xs
    args :: String = intercalate ", " $ _args xs
    result :: String = intercalate " & " xs

loop :: Printer -> [String] -> [String]
loop printer xs =
  if null xs
    then mempty
    else loop printer (init xs) ++ [printer xs]

main :: IO ()
main = mapM_ putStrLn $ reverse $ loop printType letters
