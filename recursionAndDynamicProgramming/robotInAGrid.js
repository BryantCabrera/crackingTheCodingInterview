// 8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.  The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them.  Design an algorithm to find a path for the robot from the top left to the bottom right.

// Optimized solution.
const robotInAGrid = (grid) => {
	const getPath = (entireGrid, row, col, path, hashMap) => {
		// If we are not within the grid, this is not a valid path.
		if (col < 0 || row < 0 || !entireGrid[row][col]) return false;

		const currentCell = [row, col];

		if (hashMap.get(currentCell)) {
			return currentCell;
		}

		let isValidPath = false;

		// If we are at the origin OR there is a validPath from the start to my current cell OR the cell in the next column, this is a valid path.
		if ((row === 0 &&  col === 0) || getPath(entireGrid, row - 1, col, path, hashMap) || getPath(entireGrid, row, col - 1, path, hashMap)) {
			// Save this path.
			path.push(currentCell);
			isValidPath = true;
		}

		hashMap.set(currentCell, isValidPath);

		return isValidPath;
	};

	// If the grid is not valid, there is no valid path.
	if (grid === null || grid.length === 0) return null;

	// Initialize a valid path array.
	const validPath = [];

	// Initialize a hashmap of already visited cells.
	const visitedHashMap = new Map();

	// Recursively traverse the grid to find a valid path.
	// We are starting from the bottom right (end point, last row, last col) of the grid.
	if (getPath(grid, grid.length - 1, grid[0].length - 1, validPath, visitedHashMap)) {
		return validPath;
	}

	return null;
};

// Unoptimized solution.
const robotInAGrid2 = (grid) => {
	const getPath = (entireGrid, row, col, path) => {
		// If we are not within the grid, this is not a valid path.
		if (col < 0 || row < 0 || !entireGrid[row][col]) return false;

		// If we are at the origin OR there is a validPath from the start to the current cell OR the cell in the next column, this is a valid path.
		if ((row === 0 &&  col === 0) || getPath(entireGrid, row - 1, col, path) || getPath(entireGrid, row, col - 1, path)) {
			// Save this path.
			path.push([row, col]);
			return true;
		}

		// If this isn't a valid path.
		return false;
	};

	// If the grid is not valid, there is no valid path.
	if (grid === null || grid.length === 0) return null;

	// Initialize a valid path array.
	const validPath = [];

	// Recursively traverse the grid to find a valid path.
	// We are starting from the bottom right (end point, last row, last col) of the grid.
	if (getPath(grid, grid.length - 1, grid[0].length - 1, validPath)) {
		return validPath;
	}

	return null;
};

const input1 = [
	[1, 1, 1], 
	[1, 1, 0], 
	[0, 1, 1]
];
console.log(robotInAGrid(input1)); // Expect: [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ].
//  This translates to: ['down', 'right', 'down', 'right'], ['right', 'down', 'down', 'right'].