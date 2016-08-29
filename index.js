/* @flow */

import {assign} from 'lodash';

type Base = {base: boolean};
type A = Base & {a: boolean};
type B = A & {b: boolean};
type C = B & {c: boolean};

var base: Base = assign({base: false});
var a: A = assign(base, {a: true});
var b: B = assign(a, {b: false});
var c: C = assign(b, {c: true});
