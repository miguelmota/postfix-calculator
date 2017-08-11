# postfix-calculator

> Calculate a postfix ([Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)) expression.

# Install

```bash
npm install postfix-calculator
```

# Usage

```javascript
const postfixCalculator = require('postfix-calculator');

console.log(postfixCalculator('1 2 +')); // 3
console.log(postfixCalculator('3 4 5 + *')); // 27
console.log(postfixCalculator('3 4 * 2 5 + / 3 4 + *')); // 12
console.log(postfixCalculator('57.5 -34.1 - 6 3.2 / * 4.3 +')); // 176.05
console.log(postfixCalculator('a & 5')); // null (invalid expressions return null)
```

Use the [infix-to-postfix](https://github.com/miguelmota/infix-to-postfix) module for converting infix to postfix expressions.

# Test

```bash
npm test
```

# Credits

[Algorithms for Parsing Arithmetic Expressions](http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html)

# License

MIT
