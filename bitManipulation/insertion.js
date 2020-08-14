// 5.1 Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and j.  Write a method to insert M into N such that M starts at bit j and ends at bit i.  You can assume that the bits j through i have enough space to fit all of M.  That is, if M = 10011, you can assume that there are at least 5 bits between j and i.  You would not, for example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.

const insertion = (n, m, i, j) => {
	// We need a mask of n where everywhere but indices of insertion are 1s so that when we OR with our leftshifted m, we override the values at the bit indices that are overflow from m's bitsize (j - m's bitsize).  Therefore, we need to clear (insert 0s) from i to j in n, otherwise, an OR from a 1 in n with a 0 from m would result in a 1, rather than what we actually want, a 0.

	// Left side of mask.
	// We takes 1s and left shift it just outside of j, the ending index of insertion.
	const leftMask = (n >> (i + j - 1)) << (i + j - 1);
	// const leftMask = ~0 << (j + 1); // Book's solution.
	console.log(`leftMask: ${leftMask}`);

	// Right side of mask.
	// We take 1s and leftshift them i, then NOT that to get 1s in the correct bit positions.  Then AND with n to retrieve the bit values at those positions.
	const rightMask = n & ~(~0 << i);
	// const rightMask = ((1 << i) - 1); // Book's solution.
	console.log(`rightMask: ${rightMask}`);

	// Complete mask, clearing the bits between positions i and j (setting them to 0).
	const maskedN = leftMask | rightMask;
	console.log(`maskedN: ${maskedN}`);

	// Put the binary number we want to insert into the correct starting bit position.
	const leftShiftedM = m << i;

	return maskedN | leftShiftedM;
};

const convertDecimalToBinary = (num) => {
	return num.toString(2);
};

const input1N = 0b10000000000; // 10000000000 in binary = 1024 in base 10.
console.log(`input1N: ${input1N}`);
const input1M = 0b10011;
console.log(`input1M: ${input1M}`); // 10011 in binary = 19 in base 10.

console.log(insertion(input1N, input1M, 2, 6)); // Expect: 10001001100 in binary = 1100 in base 10.