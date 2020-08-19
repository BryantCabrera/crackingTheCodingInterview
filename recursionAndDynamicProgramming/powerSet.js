// 8.4 Power Set: Write a method to return all subsets of a set.

const powerSet = (set) => {
	const subsets = [];

	const createSet = (set, subsets) => {

	};

	return subsets;
};

const input1 = new Set();
const input1values = [0, 1, 2];
for (let value of input1values) {
	input1.add(value);
}
console.log(powerSet(input1).length); // Expect: 6.
console.log(powerSet(input1)); // Expect:
// [
// 	[0], 
// 	[0, 1],
// 	[0, 1, 2],
// 	[1],
// 	[1, 2],
// 	[2]
// ]