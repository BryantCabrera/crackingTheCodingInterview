// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

const isUnique = (str) => {
	const hashMap = {};

	let currentStrIndex = 0;
	let strIsUnique = true;
	while (currentStrIndex <= str.length) {
		if (hashMap[str[currentStrIndex]] !== undefined) {
			strIsUnique = false;
			break;
		} else {
			hashMap[str.charAt(currentStrIndex)] = currentStrIndex;
		}
		currentStrIndex++;
	}
	return strIsUnique;
};

const sampleInput1 = 'aabcadb';
const sampleInput2 = 'abcde';

console.log(isUnique(sampleInput1));
console.log(isUnique(sampleInput2));