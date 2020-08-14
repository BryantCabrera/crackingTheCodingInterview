// 5.6 Conversion: Write a function to determine the number of bits you would need to flip to convert integer A to integer B.

const conversion = (intA, intB) => {
	// Initialize count.
	let count = 0;

	// A loop in which we XOR intA and intB to get the bits that our different.
	// We get (diffBits -1) to clear out the least significant bit (if it was 1, we turn it into 0 and the subsequent 0s will turn into 1s). We AND diffBits with diffBits - 1 to effectively see how many 1s were in diffBits (= how many bits were different between A & B).
	// We do this until we get diffBits === 0 because then we have accounted for all the 1s in diffBits (= all the different bits between A & B).
	for (let diffBits = intA ^ intB; diffBits !== 0; diffBits = diffBits & (diffBits - 1)) {
		count++;
	}

	return count;
};

const input1 = 0b11101; // 29 in base 10.
const input2 = 0b01111; // 15 in base 10.
console.log(conversion(input1, input2)); // Expect: 2.

const input3 = 0b10001; // 17 in base 10.
const input4 = 0b01110; // 14 in base 10.
console.log(conversion(input3, input4)); // Expect: 5.