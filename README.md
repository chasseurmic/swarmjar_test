# swarmjar_test

## Utilities

### `capitalize(text)`

Defined in `src/capitalize.js`. Returns the string with its first character upper-cased and the rest unchanged. An empty string returns `''`. Throws a `TypeError` if `text` is not a string.

```js
const { capitalize } = require('./src/capitalize');

capitalize('hello');       // 'Hello'
capitalize('hello world'); // 'Hello world'
capitalize('');            // ''
capitalize(42);            // throws TypeError
```
