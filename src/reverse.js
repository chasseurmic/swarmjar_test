'use strict';

function reverse(text) {
  if (typeof text !== 'string') {
    throw new TypeError('reverse expects a string');
  }
  if (text === '') {
    return '';
  }
  return Array.from(text).reverse().join('');
}

module.exports = { reverse };
