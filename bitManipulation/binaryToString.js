// 5.2 Binary to String: Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation.  If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR."

const binaryToString = (double) => {
	// If the argument does not fall within the allowable range, return an error message.
	if (double < 0 || double > 1) return "ERROR";

	let binaryResult = '.';

	// When converting an integer to binary, we keep dividing that integer by 2 (the base of the number system we are converting to) until we get 0.  At each step, we place the remainder in the appropriate number place, starting from right to left.
	// When converting decimals, we divide by the new base (1/2).  Because in binary, decimals go from (1/(10^0))...etc. (base 10) to (1/(2^0))...etc. (base 2).  This has the same effect as multiplying the decimal by 2.  We then place a 1 (if the doubled decimal is >1) in that binary "decimal" place, else place a 0.
	let current = double;

	while (current > 0) {
		// If the binary result we are building exceeds 32 bits, stop the loop.
		if (binaryResult.length > 32) return "ERROR";

		current = current / (1/2);

		if (current >= 1) {
			// Concateanate 1 to the binary result we are building.
			binaryResult += '1';

			// Subtract that 1 and deal with the rest of the decimal.
			current = current - 1;
		} else {
			// Concateanate 0 to the binary result we are building.
			binaryResult += '0';
		}
	}

	return binaryResult;
};

const input1 = .72;
console.log(binaryToString(input1)); // Expect: 0.10111000010100011111.

const input2 = .703125;
console.log(binaryToString(input2)); // Expect: 0.101101.