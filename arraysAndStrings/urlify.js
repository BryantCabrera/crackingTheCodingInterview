// 1.3 URLify: Write a method to replace all spaces in a string with '%20'.  You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

const urlify = (str, trueStrLength) => {
	// I chose to split this into an array because reassigning a value in the string will alter the length of the string, whereas reassigning an element in an array will not change the length of the array.
	const strArr = str.split('');
	
	for (let i = 0; i < trueStrLength; i++) {
		if (strArr[i] === ' ') strArr[i] = '%20';
	}

	return strArr.join('');
};

const input1 = 'Mr John Smith     '; // Expect: "Mr%20John%20Smith"

console.log(urlify(input1, 13));