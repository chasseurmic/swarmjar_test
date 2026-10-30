const { test } = require('node:test');
const assert = require('node:assert/strict');
const { reverse } = require('../src/reverse');

test('reverses a single word', () => {
  assert.equal(reverse('abc'), 'cba');
});

test('reverses a phrase', () => {
  assert.equal(reverse('hello world'), 'dlrow olleh');
});

test('returns a single character unchanged', () => {
  assert.equal(reverse('a'), 'a');
});

test('returns an empty string for an empty string', () => {
  assert.equal(reverse(''), '');
});

test('keeps surrogate pairs such as emoji intact', () => {
  assert.equal(reverse('a\u{1F600}b'), 'b\u{1F600}a');
});

test('throws TypeError for non-string input', () => {
  assert.throws(() => reverse(42), TypeError);
});
