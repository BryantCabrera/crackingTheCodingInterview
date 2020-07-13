// 1.7: Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.  Can you do this in place?

const rotateMatrix = (arr) => {
 let rowMin = 0;
 let rowMax = arr.length - 1;
 let colMin = 0;
 let colMax = arr[0].length - 1;

 // N swaps need to be done N - 1 times.
 let temp;
 for (let i = 0; i < arr[rowMin].length - 1; i++) {
	temp = arr[rowMin][colMax];
	arr[rowMin][colMax] = arr[rowMin][i];
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