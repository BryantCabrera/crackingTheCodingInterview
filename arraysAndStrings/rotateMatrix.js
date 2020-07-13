// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.  Can you do this in place?

const rotateMatrix = (matrix) => {
 let rowMin = 0;
 let rowMax = matrix.length - 1;
 let colMin = 0;
 let colMax = matrix[0].length - 1;

 // N swaps need to be done N - 1 times.
 let temp;
 for (let i = 0; i < matrix[rowMin].length - 1; i++) {
	temp = matrix[rowMin][colMax];
	matrix[rowMin][colMax] = matrix[rowMin][i];
	// temp =  
 }
};

const input1 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

console.log(rotateMatrix(input1)); 
// Expect: [
// 	[13, 9, 5, 1],
// 	[14, 10, 6, 2],
// 	[15, 11, 7, 3],
// 	[16, 12, 8, 4]
// ]