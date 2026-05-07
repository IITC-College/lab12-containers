const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('./calculator');

test('add returns correct sum', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(0, 0), 0);
  assert.strictEqual(add(-1, 1), 0);
});

test('subtract returns correct difference', () => {
  assert.strictEqual(subtract(5, 2), 3);
  assert.strictEqual(subtract(0, 5), -5);
});

test('multiply returns correct product', () => {
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(multiply(0, 100), 0);
});
