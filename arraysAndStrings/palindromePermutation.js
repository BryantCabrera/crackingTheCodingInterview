// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or phrase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  The palindrome does not need to be limited to just dictionary words.

const palindromePermutation = (str) => {
	// Convert every character to lower case to avoid separating letters by case.
	const lowerCaseStr = str.toLowerCase();

	const hashMap = {};

	for (let i = 0; i < lowerCaseStr.length; i++) {
		if (lowerCaseStr.charAt(i) !== ' ') {
			hashMap[lowerCaseStr.charAt(i)] = hashMap[lowerCaseStr.charAt(i)] ? hashMap[lowerCaseStr.charAt(i)] + 1 : 1;
		}
	}

	let charsWithOddCounts = 0;
	for (const character in hashMap) {
		if (hashMap[character] % 2 !== 0) charsWithOddCounts++;
	}

	// At most, there can be 1 character with an odd count.
	// (e.g. abba has 0 chars with an odd count, aba has 1 char with an odd count, abca has 2 chars with an odd count and is not a palindrome)
	return charsWithOddCounts < 2;
};

let input1 = 'Tact Coa'; // Expect: true
let input2 = 'Tact Coad'; // Expect: false

console.log(palindromePermutation(input1)); // Expect: true
console.log(palindromePermutation(input2)); // Expect: false