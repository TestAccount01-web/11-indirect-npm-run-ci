const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('../src/sum');

test('sum adds numbers', () => assert.strictEqual(sum(2, 3), 5));
