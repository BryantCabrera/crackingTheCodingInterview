// 8.3 Magic Index: A magic index in an array A[0...n - 1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

const magicIndex1 = (sortedArrWithDistinctInts) => {
	const findMagicIndex = (arr, startIndex, endIndex) => {
		if (endIndex < startIndex) return null;

		const midpoint = Math.floor((endIndex - startIndex) / 2);

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

const input1 = [-1, 0, 2, 5, 7, 9];
console.log(magicIndex1(input1)); // Expect: 2.

const input2 = [0, 3, 4, 7, 8, 9];
console.log(magicIndex1(input2)); // Expect: 0.

const input3 = [4, 5, 6, 7, 8, 9];
console.log(magicIndex1(input3)); // Expect: null.