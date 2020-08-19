// 8.3 Magic Index: A magic index in an array A[0...n - 1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// Brute Force Solution
const magicIndex1a = (sortedArrWithDistinctInts) => {
	for (let i = 0; i <  sortedArrWithDistinctInts.length; i++) {
		if (sortedArrWithDistinctInts[i] === i) {
			return i;
		}
	}

	return null;
};

const input1 = [9, 8, 2, 0, 1, 3];
console.log(magicIndex1(input1)); // Expect: 2.

const input2 = [0, 9, 2, 8, 1, 7];
console.log(magicIndex1(input2)); // Expect: 0.

const input3 = [9, 8, 7, 6, 5, 4];
console.log(magicIndex1(input3)); // Expect: null.