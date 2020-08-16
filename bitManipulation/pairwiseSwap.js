// 5.7 Pairwise Swap: Write a program to swap odd and even bits in an integer with as few instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).

const pairwiseSwap = (binaryInt) => {
	// OxA returns 1010 in binary. Adding more As adds more 1010s.
	// ANDing binaryInt and OxA will return every even-placed 1 in x.
	// Bit shifting right by 1 will move the bits in even positions into odd positions.

	// 0x5 returns 0101 in binary.  Adding more 5s adds more 0101s.
	// ANDing binaryInt and Ox5 will return every odd-placed 1 in x.
	// Bit shifting left by 1 will move the bits in odd positions into even positions.

	// ORing the separate left and right transformations will return a combined bit-sequence.

	return (((binaryInt & 0xAAAA) >>> 1) | ((binaryInt & 0x5555) << 1)).toString(2);
};

const input1 = 0b011101; // 29 in base 10.
console.log(pairwiseSwap(input1)); // Expect: 0b101110. 46 in base 10.

const input2 = 0b101110; // 46 in base 10.
console.log(pairwiseSwap(input2)); // Expect: 0b011101. 29 in base 10.