// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (str1, str2) => {
	const hashMap = {};
	for (let i = 0; i < str1.length; i++) {
		hashMap[str1.charAt(i)] = hashMap[str1.charAt(i)] ? hashMap[str1.charAt(i)] + 1 : 1;
	}

	for (let i = 0; i < str2.length; i++) {
		// hashMap[str2.charAt(i)] = hashMap[str2.charAt(i)] ? hashMap[str2.charAt(i)] - 1 : 1;
		if (hashMap[str2.charAt(i)]) {
			hashMap[str2.charAt(i)] = hashMap[str2.charAt(i)] - 1
		} else {
			hashMap['str2ExtraChars'] = hashMap['str2ExtraChars'] ? hashMap['str2ExtraChars'] + 1: 1;
		}
	}

	console.log(hashMap);
	// There can be at most 2 unique keys with count > 0.
	return Object.keys(hashMap).filter(key => hashMap[key] !== 0).length <= 2;
};

const input1 = 'pale';
const input2 = 'ple';
const input3 = 'pales';
const input4 = 'bale';
const input5 = 'bake';
const input6 = 'bbake';

console.log(oneAway(input1, input2)); // Expect: true
console.log(oneAway(input3, input1)); // Expect: true
console.log(oneAway(input1, input4)); // Expect: true
console.log(oneAway(input1, input5)); // Expect: false
console.log(oneAway(input1, input6)); // Expect: false