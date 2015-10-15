const test = require('tape');
const postfixCalculate = require('../postfix-calculate');
const infixToPostfix = require('infix-to-postfix');

test('postfixCalculate', function (t) {
  'use strict';

  t.plan(20);

  console.log(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)'))

  t.equal(postfixCalculate(), null);
  t.equal(postfixCalculate({}), null);
  t.equal(postfixCalculate([]), null);
  t.equal(postfixCalculate(NaN), null);
  t.equal(postfixCalculate(true), null);
  t.equal(postfixCalculate('1 2 +'), 3);
  t.equal(postfixCalculate('1   2   +'), 3);
  t.equal(postfixCalculate(String('1 2 +')), 3);
  t.equal(postfixCalculate(new String('1 2 +')), 3);
  t.equal(postfixCalculate('1 2 + 3 + 4 +'), 10);
  t.equal(postfixCalculate('3 4 5 + *'), 27);
  t.equal(postfixCalculate('a & 5'), null);
  t.equal(postfixCalculate(infixToPostfix('a & 5')), null);
  t.equal(postfixCalculate(infixToPostfix('{}')), null);
  t.equal(postfixCalculate(infixToPostfix('(1 + 2) * -4')), -12);
  t.equal(postfixCalculate(infixToPostfix('((57.5 - -34.1) * (6 / 3.2)) + 4.3')), 176.05);
  t.equal(postfixCalculate('57.5 -34.1 - 6 3.2 / * 4.3 +'), 176.05);
  t.equal(postfixCalculate(infixToPostfix('((57.5 - .1) * (6 / 3.2)) + 4.3')), 111.925);
  t.equal(postfixCalculate(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)')), 12);
  t.equal(postfixCalculate('3 4 * 2 5 + / 3 4 + *'), 12);
});
