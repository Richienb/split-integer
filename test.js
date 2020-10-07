const test = require("ava")
const splitInteger = require(".")

test("main", t => {
	t.deepEqual(splitInteger(10, 0), [])
	t.deepEqual(splitInteger(10, 2), [5, 5])
	t.deepEqual(splitInteger(10, 3), [4, 3, 3])
	t.deepEqual(splitInteger(10, 3, { smallestFirst: true }), [3, 3, 4])
})
