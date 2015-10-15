# postfix-calculate

> Calculate a postfix ([Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)) expression.

# Install

```bash
npm install postfix-calculate
```

```bash
bower install postfix-calculate
```

# Usage

```javascript
const postfixCalculate = require('postfix-calculate');

console.log(postfixCalculate('1 2 +')); // 3
console.log(postfixCalculate('3 4 5 + *')); // 27
console.log(postfixCalculate('3 4 * 2 5 + / 3 4 + *')); // 12
console.log(postfixCalculate('57.5 -34.1 - 6 3.2 / * 4.3 +')); // 176.05
console.log(postfixCalculate('a & 5')); // null (invalid expressions return null)
```

# Test

```bash
npm test
```

# Credits

[Algorithms for Parsing Arithmetic Expressions](http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html)

# License

MIT
