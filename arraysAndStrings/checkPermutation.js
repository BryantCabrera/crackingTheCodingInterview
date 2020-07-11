// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutation = (str1, str2) => {
	const str1SortedArr = str1.split('').sort();
	const str2SortedArr = str2.split('').sort();

	let isPermutation = true;

	// Traverse str1SortedArr linearly and check if the current character matches the character at the same index in str2SortedArr.
	for (let i = 0; i < str1SortedArr.length; i++) {
		if (str1SortedArr[i] !== str2SortedArr[i]) {
			isPermutation = false;
			break;
		}
	}

	return isPermutation;
};

const sampleInput1 = 'aabcadb';
const sampleInput2 = 'abcde';
const sampleInput3 = 'ecdba';

console.log(checkPermutation(sampleInput1, sampleInput2));
console.log(checkPermutation(sampleInput2, sampleInput3));