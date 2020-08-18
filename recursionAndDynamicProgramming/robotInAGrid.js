// 8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.  The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them.  Design an algorithm to find a path for the robot from the top left to the bottom right.

const robotInAGrid = (grid) => {

};

const input1 = [
	[1, 1, 1], 
	[1, 1, 0], 
	[0, 1, 1]
];
console.log(robotInAGrid(input1)); // Expect: ['down', 'right', 'down', 'right'];