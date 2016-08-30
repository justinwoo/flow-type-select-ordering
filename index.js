/* @flow */

import {assign} from 'lodash';

type Base = {base: boolean};
type A = Base & {a: boolean};
type B = A & {b: boolean};
type C = B & {c: boolean};

var base: Base = assign({base: false});
var a: A = assign({base: false}, {a: true});
var b: B = assign({base: false}, {a: true}, {b: true});
var c: C = assign({base: false}, {a: true}, {b: true}, {c: false});
