// 8.3 Magic Index: A magic index in an array A[0...n - 1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// const magicIndex1 = (sortedArrWithDistinctInts) => {

// };

// Brute Force Solution
const magicIndex1 = (sortedArrWithDistinctInts) => {
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