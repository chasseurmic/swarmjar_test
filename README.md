# swarmjar_test

## Utilities

### slugify(text)

Defined in `src/slugify.js`. Converts text into a URL-friendly slug: it lowercases the input, replaces every run of non-alphanumeric characters with a single hyphen, and trims leading and trailing hyphens.

```js
const { slugify } = require('./src/slugify.js');

slugify('Hello, World!'); // 'hello-world'
slugify('  --A  b--  '); // 'a-b'
slugify('');             // ''
```
