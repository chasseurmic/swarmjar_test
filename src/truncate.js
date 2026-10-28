'use strict';

function truncate(text, max) {
  if (!Number.isInteger(max) || max <= 0) {
    throw new RangeError('max must be a positive integer');
  }
  if (text.length <= max) {
    return text;
  }
  return text.slice(0, max - 1) + '\u2026';
}

module.exports = { truncate };
