// 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.  Implement a method to count how many possible ways the child can run up the stairs.

const tripleStep = (lengthOfStairs) => {
	const memo = new Array();
	memo.fill(null);

	const countPaths = (n, memo) => {
		if (n < 0) {
			return 0;
		} else if (n === 0) {
			return 1;
		} else if (memo[n]) {
			return memo[n];
		} else {
			memo[n] = countPaths(n - 1, memo) + countPaths(n - 2, memo) + countPaths(n - 3, memo);

			return memo[n];
		}
	};

	return countPaths(lengthOfStairs, memo);
	// return memo[memo.length - 1];

	// for (let i = 1; i <= 3; i++) {
	// 	if (lengthOfStairs >= i) {
	// 		tripleStep(lengthOfStairs - i, counter);
	// 	} else if (lengthOfStairs === 0) {
	// 		counter += 1;
	// 		return;
	// 	}
	// }

	// return counter;
};

console.log(tripleStep(3)); // Expect: 4.
// Possible combinations
// 1, 1, 1
// 1, 2
// 2, 1
// 3