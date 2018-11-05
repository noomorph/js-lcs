# js-lcs

[![npm version](https://badge.fury.io/js/js-lcs.svg)](https://badge.fury.io/js/js-lcs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/noomorph/js-lcs.svg?branch=master)](https://travis-ci.org/noomorph/js-lcs)

Partial<sup>[1](#footnote1)</sup> implementation of [Longest common substring problem](https://en.wikipedia.org/wiki/Longest_common_substring_problem) in TypeScript/JavaScript, relatively fast and memory-optimized<sup>[2](#footnote2)</sup>.

## Usage

### Simple

```js
import { LCS } from 'js-lcs';

LCS.size("aababcabcdabcaba", "eabcde"); // 4
```

### Advanced

You can get more performance if you switch to typed arrays like *Uint8Array, Uint16Array*, and instantiate only one instance of LCS class:

```js
import { LCS } from 'js-lcs';

const rawFiles = [
  // Uint16Array of char codes in file_1.txt
  // ...
  // Uint16Array of char codes in file_n.txt
];

const maxSize = Math.max(...rawFiles.map(f => f.length));
const lcs = new LCS({ maxSize }); // in this way you reuse once allocated memory for every lcs.size() call

for (let i = 0; i < rawFiles.length; i++) {
  for (let j = 0; j < i; j++) {
      const [a, b] = [rawFiles[j], rawFiles[i]];
      console.log(lcs.size(a, b));
    }
  }
}
```

Please always make sure you don't mix types of arguments to `lcs.size()`,
e.g. if you start passing typed arrays, do not pass strings anymore and vice versa.
Otherwise, you risk getting `size()` function deoptimized by V8.

#### Footnotes

1. <a name="footnote1"> </a>At the moment, it can calculate only size of the longest common substring, not the string itself.  
2. <a name="footnote2"> </a>However, memory consumption still can be improved a bit, from `O(max(r, n))` to `O(min(r, n))` with a little pull request.
