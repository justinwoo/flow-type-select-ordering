declare module 'lodash' {
  declare class Lodash {
     // if this line is removed, the following gets selected correctly:
     assign<A>(a: A): A;
     // likewise:
     assign<A, B>(a: A, b: B): A & B;
     assign<A, B, C>(a: A, b: B, c: C): A & B & C;
     assign<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
     assign<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
     assign<A, B, C, D, E, F>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
     assign<A, B, C, D, E, F, G>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A & B & C & D & E & F & G;

    // this will work fine since flow will go down the list to match:
    //assign<A, B, C, D, E, F, G>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): A & B & C & D & E & F & G;
    //assign<A, B, C, D, E, F>(a: A, b: B, c: C, d: D, e: E, f: F): A & B & C & D & E & F;
    //assign<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    //assign<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    //assign<A, B, C>(a: A, b: B, c: C): A & B & C;
    //assign<A, B>(a: A, b: B): A & B;
  }
  declare var exports: Lodash;
}
