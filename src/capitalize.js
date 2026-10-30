'use strict';

function capitalize(text) {
  if (typeof text !== 'string') {
    throw new TypeError('capitalize expects a string');
  }
  if (text === '') {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = { capitalize };
