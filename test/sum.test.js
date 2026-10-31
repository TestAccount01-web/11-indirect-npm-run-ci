const test = require('node:test');
const assert = require('node:assert');
const { sum, divide } = require('../src/sum');

test('sum adds numbers', () => assert.strictEqual(sum(2, 3), 5));
test('divide returns the quotient of two numbers', () => assert.strictEqual(divide(10, 2), 5));
