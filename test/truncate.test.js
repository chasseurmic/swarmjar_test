const { test } = require('node:test');
const assert = require('node:assert/strict');
const { truncate } = require('../src/truncate');

test('returns text unchanged when shorter than max', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('truncates and appends ellipsis when longer than max', () => {
  const result = truncate('hello world', 5);
  assert.equal(result, 'hell…');
  assert.equal(result.length, 5);
});

test('returns text unchanged when length equals max', () => {
  assert.equal(truncate('abc', 3), 'abc');
});

test('throws RangeError when max is 0', () => {
  assert.throws(() => truncate('abc', 0), RangeError);
});

test('throws RangeError for negative or non-integer max', () => {
  assert.throws(() => truncate('abc', -1), RangeError);
  assert.throws(() => truncate('abc', 1.5), RangeError);
  assert.throws(() => truncate('abc', NaN), RangeError);
});
