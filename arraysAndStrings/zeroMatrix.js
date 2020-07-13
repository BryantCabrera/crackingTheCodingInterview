// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (matrix) => {

};

const input1 = [
	[1, 2, 3, 4],
	[0, 6, 7, 8],
	[9, 0, 0, 12],
	[13, 14, 15, 16]
];

console.log(zeroMatrix(input1));
// Expect: [
// 	[0, 0, 0, 4],
// 	[0, 0, 0, 8],
// 	[0, 0, 0, 0],
// 	[0, 0, 0, 16]
// ]