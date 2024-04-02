'use strict';

const markdownlint = require('..');
const assert = require('assert').strict;

assert.strictEqual(markdownlint(), 'Hello from markdownlint');
console.info('markdownlint tests passed');
