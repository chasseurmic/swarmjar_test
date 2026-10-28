const { test } = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify.js');

test('slugify converts punctuation and case', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
});

test('slugify collapses runs and trims hyphens', () => {
  assert.equal(slugify('  --A  b--  '), 'a-b');
});

test('slugify returns empty string for empty input', () => {
  assert.equal(slugify(''), '');
});
