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

// // const powerSet = (set) => {
// 	const createSet = (mainSet, index) => {
// 		let allSubsets = [];
// 		if (mainSet.length === index) {
// 			allSubsets.push([]);
// 			// currentSubsets.push([]);
// 			// currentSubsets.push(new Set());
// 		} else {
// 			allSubsets = createSet(mainSet, index + 1);
// 			const currentMainSetElement = mainSet[index];
// 			const moreSubsets = [];

// 			for (const subset of allSubsets) {
// 				const newSubset = [];
// 				newSubset.push(subset);
// 				newSubset.push(currentMainSetElement);
// 				moreSubsets.push(newSubset);
// 			}

// 			moreSubsets.forEach(element => allSubsets.push(element));
// 		}

// 		return allSubsets;
		
// 		// if (index === mainSet.length) {
// 		// 	return;
// 		// }

// 		// for (let i = 0; i < currentSubsets.length; i++) {
// 		// 	const newSubset = [...currentSubsets[i], mainSet[index]];

// 		// 	currentSubsets.push(currentSubsets);
// 		// 	console.log(`subset: ${currentSubsets[i]}, newSubset: ${newSubset}`);
// 		// }

// 		// const newCurrentSubsets = [];
// 		// for (const subset of currentSubsets) {
// 		// 	const newSubset = [...subset, mainSet[index]];
// 		// 	// const newSubset = subset;
// 		// 	// newSubset.add(mainSet[index]);
// 		// 	currentSubsets.push(newSubset);
// 		// 	// newCurrentSubsets.push(newSubset);
// 		// 	console.log(`subset: ${subset}, newSubset: ${newSubset}`);
// 		// }
// 		// index++;
// 		// createSet(mainSet, currentSubsets, index);
// 		// createSet(mainSet, newCurrentSubsets, index++);

// 		// if (currentSubsets.length === index) {
// 		// 	currentSubsets.push(new Set());
// 		// 	// currentSubsets.add(new Set()); // Add a new set
// 		// } else {
// 		// 	// const 
// 		// }
// 		// console.log(`currentSubsets: ${currentSubsets.length}`);
// 	};

// 	// const subsets = [];
// 	// // const subsets = new Set();

// 	// createSet(set, subsets, 1);
// 	// // createSet(set, subsets, 0);

// 	// return subsets;
// // };

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