const test = require('tape');
const postfixCalculator = require('../postfix-calculator');
const infixToPostfix = require('infix-to-postfix');

test('postfixCalculator', function (t) {
  'use strict';

  t.plan(20);

  console.log(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)'))

  t.equal(postfixCalculator(), null);
  t.equal(postfixCalculator({}), null);
  t.equal(postfixCalculator([]), null);
  t.equal(postfixCalculator(NaN), null);
  t.equal(postfixCalculator(true), null);
  t.equal(postfixCalculator('1 2 +'), 3);
  t.equal(postfixCalculator('1   2   +'), 3);
  t.equal(postfixCalculator(String('1 2 +')), 3);
  t.equal(postfixCalculator(new String('1 2 +')), 3);
  t.equal(postfixCalculator('1 2 + 3 + 4 +'), 10);
  t.equal(postfixCalculator('3 4 5 + *'), 27);
  t.equal(postfixCalculator('a & 5'), null);
  t.equal(postfixCalculator(infixToPostfix('a & 5')), null);
  t.equal(postfixCalculator(infixToPostfix('{}')), null);
  t.equal(postfixCalculator(infixToPostfix('(1 + 2) * -4')), -12);
  t.equal(postfixCalculator(infixToPostfix('((57.5 - -34.1) * (6 / 3.2)) + 4.3')), 176.05);
  t.equal(postfixCalculator('57.5 -34.1 - 6 3.2 / * 4.3 +'), 176.05);
  t.equal(postfixCalculator(infixToPostfix('((57.5 - .1) * (6 / 3.2)) + 4.3')), 111.925);
  t.equal(postfixCalculator(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)')), 12);
  t.equal(postfixCalculator('3 4 * 2 5 + / 3 4 + *'), 12);
});
