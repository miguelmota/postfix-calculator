/**
 * @credit http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html
 */
(function(root) {
  'use strict';

  function postfixCalculate(expression) {
    if (typeof expression !== 'string') {
      if (expression instanceof String) {
        expression = expression.toString();
      } else {
        return null;
      }
    }

    var result;
    var tokens = expression.split(/\s+/);
    var stack = [];
    var first;
    var second;
    var containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

    if (containsInvalidChars) {
      return null;
    }

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (token === '*') {
        second = stack.pop();
        first = stack.pop();

        if (typeof first === 'undefined') {
          first = 1;
        }

        if (typeof second === 'undefined') {
          second = 1;
        }

        stack.push(first * second);
      } else if (token === '/') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first / second);
      } else if (token === '+') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first + second);
      } else if (token === '-') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first - second);
      } else {
        if (!isNaN(token)) {
          stack.push(Number(token));
        }
      }
    }

    result = stack.pop();

    return result;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = postfixCalculate;
    }
    exports.postfixCalculate = postfixCalculate;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return postfixCalculate;
    });
  } else {
    root.postfixCalculate = postfixCalculate;
  }

})(this);
