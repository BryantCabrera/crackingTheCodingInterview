// 1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").

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

		// for (let i = s2Pivot; i < s2.length; i++) {
		// 	if (s2[i] !== s1[s1Pointer]) {
		// 		return false;
		// 	}
		// 	s1Pointer++;
		// }

		// return isSubstring(s1, s2.substring(0, s2Pivot));
	}

	// // Edge Case: If the words are the same, return true.
	// if (s1 === s2) return true;
};

const input1 = 'waterbottle';
const input2 = 'erbottlewat';
const input3 = 'erbotttlewat';
const input4 = 'llama';
const input5 = 'lamal';

console.log(isSubstring(input1, 'bottle'));
console.log(isSubstring(input1, 'botttle'));

console.log(stringRotation(input1, input2));
console.log(stringRotation(input1, input3));
console.log(stringRotation(input1, input1));
console.log(stringRotation(input4, input5));