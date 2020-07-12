// 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated character.  For example, the string aabcccccaaa would become a2b1c5a3.  If the "compressed" string would not become smaller than the original string, your method should return the original string.  You can assume the string has only uppercase and lowercase letters (a-z).

const stringCompression = (str) => {
	let previousChar = str.charAt(0);
	let previousCharCount = 0;
	let compressedStr = '';

	for (let i = 0; i < str.length; i++) {
		const currentChar = str.charAt(i);

		if (i === str.length - 1 || currentChar !== previousChar) {
			// If we are at the end of the string, we increment the counter for the last letter by 1 as we will not hit the conditional below to increment it.
			compressedStr += `${previousChar}${i === str.length - 1 ? previousCharCount + 1 : previousCharCount}`;
			previousChar = currentChar;
			previousCharCount = 1;
		} else if (currentChar === previousChar) {
			previousCharCount++;
		}
	}

	return compressedStr.length < str.length ? compressedStr : str;
};

const input1 = 'aabcccccaaa'; // Expect: 'a2b1c5a3'
const input2 = 'aabccaaa'; // Expect: 'aabccaaa' and NOT 'a2b1c2a3'

console.log(stringCompression(input1)); // Expect: 'a2b1c5a3'
console.log(stringCompression(input2)); // Expect: 'aabccaaa' and NOT 'a2b1c2a3'