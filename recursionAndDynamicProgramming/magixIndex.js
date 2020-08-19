// 8.3 Magic Index: A magic index in an array A[0...n - 1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// FOLLOW UP: What if the values are not distinct?

const magicIndex1 = (sortedArrWithDistinctInts) => {
	const findMagicIndex = (arr, startIndex, endIndex) => {
		if (endIndex < startIndex) return null;

		const midpoint = Math.floor((endIndex + startIndex) / 2);

		if (arr[midpoint] === midpoint) {
			// If the arr[i] is i, we have found our magic index.
			return arr[midpoint];
		} else if (arr[midpoint] > midpoint) {
			// If arr[i] is greater than i, we have to search the left of the arr.
			return findMagicIndex(arr, startIndex, midpoint - 1);
		} else if (arr[midpoint] < midpoint) {
			// If arr[i] is less than i, we have to search the right of the arr.
			return findMagicIndex(arr, midpoint + 1, endIndex);
		}
	};

	if (sortedArrWithDistinctInts === null) return null;

	return findMagicIndex(sortedArrWithDistinctInts, 0, sortedArrWithDistinctInts.length - 1);
};

// Brute Force Solution
const magicIndex1a = (sortedArrWithDistinctInts) => {
	for (let i = 0; i <  sortedArrWithDistinctInts.length; i++) {
		if (sortedArrWithDistinctInts[i] === i) {
			return i;
		}
	}

	return null;
};

const magicIndex2 = (sortedArrWithNonDistinctInts) => {
	const findMagicIndex = (arr, startIndex, endIndex) => {
		if (endIndex < startIndex) return null;

		const midpoint = Math.floor((endIndex + startIndex) / 2);
		console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}, midpoint: ${midpoint}, left: ${Math.min(arr[midpoint], midpoint - 1)}`);

		if (arr[midpoint] === midpoint) {
			// If the arr[i] is i, we have found our magic index.
			return arr[midpoint];
		} else if (arr[midpoint] < midpoint) {
			console.log(`left: ${Math.min(arr[midpoint], midpoint - 1)}`);
			return findMagicIndex(arr, startIndex, Math.min(arr[midpoint], midpoint - 1));
		} else if (arr[midpoint] > midpoint) {
			return findMagicIndex(arr, Math.max(arr[midpoint], midpoint + 1), endIndex);
		}
	};

	if (sortedArrWithNonDistinctInts === null) return null;

	return findMagicIndex(sortedArrWithNonDistinctInts, 0, sortedArrWithNonDistinctInts.length - 1);
};

const input1 = [-1, 0, 2, 5, 7, 9];
console.log('magicIndex1 (with distinct ints)', magicIndex1(input1)); // Expect: 2.

const input2 = [0, 3, 4, 7, 8, 9];
console.log('magicIndex1 (with distinct ints)', magicIndex1(input2)); // Expect: 0.

const input3 = [4, 5, 6, 7, 8, 9];
console.log('magicIndex1 (with distinct ints)', magicIndex1(input3)); // Expect: null.

const input4 = [-1, 0, 2, 2, 7, 9];
console.log('magicIndex2 (with non-distinct ints) ', magicIndex2(input4)); // Expect: 2.

const input5 = [0, 0, 0, 7, 8, 9];
console.log('magicIndex2 (with non-distinct ints) ', magicIndex2(input5)); // Expect: 0.

const input6 = [4, 5, 5, 7, 8, 9];
console.log('magicIndex2 (with non-distinct ints) ', magicIndex2(input6)); // Expect: null.