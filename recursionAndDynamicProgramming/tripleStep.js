// 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.  Implement a method to count how many possible ways the child can run up the stairs.

const tripleStep = (lengthOfStairs) => {
	// Cache the work we have already done.
	// Using an array instead of a hashmap because the size is manageable enough.
	const memo = new Array();
	memo.fill(null);

	const countPaths = (n, memo) => {
		if (n < 0) {
			// If we are overshooting the end, this is not a valid path.
			return 0;
		} else if (n === 0) {
			// Once we reach the end, consider it a valid path.
			return 1;
		} else if (memo[n]) {
			// Reference previous work done that is stored in the cache.
			return memo[n];
		} else {
			// Update the cache.
			// We determine the paths from 1, 2, or 3 steps away from current step.
			memo[n] = countPaths(n - 1, memo) + countPaths(n - 2, memo) + countPaths(n - 3, memo);

			return memo[n];
		}
	};

	return countPaths(lengthOfStairs, memo);
};

console.log(tripleStep(0)); // Expect: 1.

console.log(tripleStep(1)); // Expect: 1.

console.log(tripleStep(3)); // Expect: 4.
// Possible combinations
// 1, 1, 1
// 1, 2
// 2, 1
// 3