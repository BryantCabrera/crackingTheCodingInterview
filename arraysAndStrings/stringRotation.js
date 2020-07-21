// 1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").

// I am assumin tthat isSubstring is a contiguous substring, such that 'wter' will not be considered a substring of 'water' and thus return false.
const isSubstring = (str, possibleSubstr) => {
	return str.includes(possibleSubstr);
};

const stringRotation = (s1, s2) => {
	// If the words are not the same length, return false as there is no way this could ever be a rotation.
	if (s1.length !== s2.length) {
		return false;
	} else {
		let s1Pointer = 0;
		let s2Pointer = s2.indexOf(s1[0]);

		while (s2Pointer < s2.length) {
			// If the first character can't be found, return false.
			if (s2Pointer === -1)  return false;

			if (s2[s2Pointer] !== s1[s1Pointer]) {
				// Set the pointer to the index of the next character in s2 that matches the first letter of s1 as this will be the new pivot/pointer.
				s2Pointer = s2.indexOf(s1[0], s2Pointer + 1);
			} else {
				s1Pointer++;
				s2Pointer++;
			}
		}

		return isSubstring(s1, s2.substring(0, s2Pointer - s1Pointer));
	}
};

const stringRotation2 = (s1, s2) => {
	// If I concatenate s2 to itself, it should contain s1.
	return isSubstring(`${s2}${s2}`, s1);
};

const input1 = 'waterbottle';
const input2 = 'erbottlewat';
const input3 = 'erbotttlewat';
const input4 = 'llama';
const input5 = 'lamal';

console.log(isSubstring(input1, 'bottle')); // Expect: true
console.log(isSubstring(input1, 'botttle')); // Expect: false

console.log(stringRotation(input1, input2)); // Expect: true
console.log(stringRotation(input1, input3)); // Expect: false
console.log(stringRotation(input1, input1)); // Expect: true
console.log(stringRotation(input4, input5)); // Expect: true

console.log(stringRotation2(input1, input2)); // Expect: true
console.log(stringRotation2(input1, input3)); // Expect: false
console.log(stringRotation2(input1, input1)); // Expect: true
console.log(stringRotation2(input4, input5)); // Expect: true