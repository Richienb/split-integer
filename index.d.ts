declare namespace splitInteger {
	export interface Options {
		/**
		Whether to order the smallest numbers first in the resulting array.

		@default false
		*/
		smallestFirst?: boolean
	}
}

/**
Split up an integer into even parts that add to the original integer.

@param number The number to split.
@param parts The amount of parts to split the number into.

@example
```
const theModule = require("the-module")

theModule("unicorns")
//=> "unicorns & rainbows"
```
*/
declare function splitInteger(number: number, parts: number, options?: splitInteger.Options): number[]

export = splitInteger
