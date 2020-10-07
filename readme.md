# split-integer [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/split-integer/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/split-integer)

Split up an integer into even parts that add to the original integer.

[![NPM Badge](https://nodei.co/npm/split-integer.png)](https://npmjs.com/package/split-integer)

## Install

```sh
npm install split-integer
```

## Usage

```js
const splitInteger = require("split-integer")

splitInteger(10, 2)
//=> [5, 5]

splitInteger(10, 3)
//=> [4, 3, 3]

splitInteger(10, 3, { smallestFirst: true })
//=> [3, 3, 4]
```

## API

### splitInteger(number, parts, options?)

#### number

Type: `number`

The number to split.

#### parts

Type: `number`

The amount of parts to split the number into.

#### options

Type: `object`

##### smallestFirst

Type: `boolean`\
Default: `false`

Whether to order the smallest numbers first in the resulting array.
