const { test } = require('node:test');
const assert = require('node:assert/strict');
const { capitalize } = require('../src/capitalize');

test('capitalizes a single word', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('capitalizes only the first character of a phrase', () => {
  assert.equal(capitalize('hello world'), 'Hello world');
});

test('leaves an already capitalized string unchanged', () => {
  assert.equal(capitalize('Already'), 'Already');
});

test('returns an empty string for an empty string', () => {
  assert.equal(capitalize(''), '');
});

test('throws TypeError for non-string input', () => {
  assert.throws(() => capitalize(42), TypeError);
});
