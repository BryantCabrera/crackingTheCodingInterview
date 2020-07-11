// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

const isUnique = (str) => {
	const hashMap = {};

	let currentStrIndex = 0;
	let strIsUnique = true;
	while (currentStrIndex < str.length) {
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

const isUnique2 = (str) => {
	let currentStrIndex = 0;
	let strIsUnique = true;
	while (currentStrIndex < str.length) {
		if (str.indexOf(str.charAt(currentStrIndex), currentStrIndex + 1) !== -1) {
			strIsUnique = false;
			break;
		}
		currentStrIndex++;
	}
	return strIsUnique;
};

console.log(isUnique2(sampleInput1));
console.log(isUnique2(sampleInput2));