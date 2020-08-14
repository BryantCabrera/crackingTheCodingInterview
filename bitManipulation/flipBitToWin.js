// 5.3 Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1.  Write code to find the length of the longest sequence of 1s you could create.

const flipBitToWin = (int) => {
	const binaryInt = int.toString(2);
	console.log(`binaryInt: ${binaryInt}`);

	
};

const input1 = 1775; // Represented as 11011101111 in binary.
console.log(flipBitToWin(input1)); // Expect: 8;