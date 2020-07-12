// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// O(N log N) solution
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

console.log(checkPermutation(sampleInput1, sampleInput2)); // Expect: false
console.log(checkPermutation(sampleInput2, sampleInput3)); // Expect: true

// O(N) Solution
const checkPermutation2 = (str1, str2) => {
	const hashMap = {};
	for (let i = 0; i < str1.length; i++) {
		hashMap[str1.charAt(i)] = hashMap[str1.charAt(i)] ? hashMap[str1.charAt(i)] + 1 : 1;
	}

	for (let i = 0; i < str2.length; i++) {
		if (hashMap[str2.charAt(i)]) {
			hashMap[str2.charAt(i)] = hashMap[str2.charAt(i)] - 1;
		} else {
			hashMap['str2ExtraChars'] = hashMap['str2ExtraChars'] ? hashMap['str2ExtraChars'] + 1: 1;
		}
	}

	// If the hashMap counts are all 0 for every character, then str2 is a permutation of string 1 because the counts of each letter are the same.
	let isPermutation = true;
	for (const character in hashMap) {
		if (hashMap[character] !== 0) isPermutation = false;
	}
	return isPermutation;
};

console.log(checkPermutation2(sampleInput1, sampleInput2)); // Expect: false
console.log(checkPermutation2(sampleInput2, sampleInput3)); // Expect: true