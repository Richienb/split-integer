"use strict"

module.exports = (number, parts, { smallestFirst = false } = {}) => {
	if (!Number.isInteger(number) || number < 1) {
		throw new TypeError("The number must be a positive integer.")
	}

	if (!Number.isInteger(number) || number < 0) {
		throw new TypeError("The amount of parts must be a non-negative integer.")
	}

	if (typeof smallestFirst !== "boolean") {
		throw new TypeError("`smallestFirst` must be a boolean.")
	}

	if (number === 0) {
		return []
	}

	const remainder = number % parts
	const baseValue = (number - remainder) / parts

	return smallestFirst ?
		new Array(parts).fill(baseValue).fill(baseValue + 1, parts - remainder, parts) :
		new Array(parts).fill(baseValue).fill(baseValue + 1, 0, remainder)
}
