// 8.4 Power Set: Write a method to return all subsets of a set.

const powerSet = (set, allSubsets = [[]]) => {
	if (set.length === 0) return allSubsets;

	// Remove the first element in the set array.
	const currentElement = set.shift();

	// Make deep copy of allSubsets.
	const allSubsetsCopy = JSON.parse(JSON.stringify(allSubsets));
	// Iterate through copy of allSubsets.
	for (const subset of allSubsetsCopy) {
		// Take the subset and add the current element we shifted from the main set.
		subset.push(currentElement);
		// Push this newly constructed subset into the origin allSubsets array.
		allSubsets.push(subset);
	}

	return powerSet(set, allSubsets);
};


const input1 = [0, 1, 2];
const solution1 = powerSet(input1)
console.log(solution1.length); // Expect: 8.
console.log(solution1); // Expect:
// [
//	[],
// 	[0], 
// 	[0, 1],
//  [0, 2],
// 	[0, 1, 2],
// 	[1],
// 	[1, 2],
// 	[2]
// ]


// Alternative set up if built-in sets from JavaScript are used.
// const input1 = new Set();
// const input1values = [0, 1, 2];
// for (let value of input1values) {
// 	input1.add(value);
// }
// console.log(input1); // Expect: Set { 0, 1, 2 }
// // for (let value of input1.values()) {
// // 	console.log(`value: ${value}`);
// // }
// console.log(powerSet(input1).length); // Expect: 7.
// console.log(powerSet(input1)); // Expect:
// // [
// //	[],
// // 	[0], 
// // 	[0, 1],
// // 	[0, 1, 2],
// // 	[1],
// // 	[1, 2],
// // 	[2]
// // ]