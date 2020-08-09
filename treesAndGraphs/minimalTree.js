// 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

const minimalTree = (arr, startIndex, endIndex) => {
	if (endIndex < startIndex) return null;

	const midpoint = Math.floor((startIndex + endIndex) / 2);

	const node = new TreeNode(arr[midpoint]);

	node.left = minimalTree(arr, startIndex, midpoint - 1);
	node.right = minimalTree(arr, midpoint + 1, endIndex);

	return node;
};

class TreeNode {
	constructor (value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

const input1 = [1, 2, 3, 5, 8, 10];
console.log(minimalTree(input1, 0, input1.length - 1));  // Expect: height of 3.
// Recursion graph
// node, arr, startIndex, endIndex, midpoint, return
// root, [1, 2, 3, 5, 8, 10], 0, 5, 2, 3
	// left, [1, 2, 3, 5, 8, 10], 0, 1, 0, 1
		// left, [1, 2, 3, 5, 8, 10], 0, -1, -1, null
		// right, [1, 2, 3, 5, 8, 10], 1, 1, 1, 2
			// left, [1, 2, 3, 5, 8, 10], 1, 0, -1, null
			// right, [1, 2, 3, 5, 8, 10], 2, 1, -1, null
	// right, [1, 2, 3, 5, 8, 10], 3, 5, 4, 8
		// left, [1, 2, 3, 5, 8, 10], 3, 3, 3, 5
			// left, [1, 2, 3, 5, 8, 10], 3, 2, -1, null
			// right, [1, 2, 3, 5, 8, 10], 4, 3, -1, null
		// right, [1, 2, 3, 5, 8, 10], 5, 5, 5, 10
			// left, [1, 2, 3, 5, 8, 10], 5, 4, -1, null
			// right, [1, 2, 3, 5, 8, 10], 6, 5, -1, null

const input2 = [1, 2, 3, 4, 5, 6, 8];
console.log(minimalTree(input2, 0, input2.length - 1));  // Expect: height of 3.
// Recursion graph
// node, arr, startIndex, endIndex, midpoint, return
// root, [1, 2, 3, 4, 5, 6, 8], 0, 6, 3, 4
	// left, [1, 2, 3, 4, 5, 6, 8], 0, 2, 1, 2
		// left, [1, 2, 3, 4, 5, 6, 8], 0, 0, 0, 1
			// left, [1, 2, 3, 4, 5, 6, 8], 0, -1, -1, null
			// right, [1, 2, 3, 4, 5, 6, 8], 1, 0, -1, null
		// right, [1, 2, 3, 4, 5, 6, 8], 2, 2, 2, 3
			// left, [1, 2, 3, 4, 5, 6, 8], 2, 1, -1, null
			// right, [1, 2, 3, 4, 5, 6, 8], 3, 2, -1, null
	// right, [1, 2, 3, 4, 5, 6, 8], 4, 6, 5, 6
		// left, [1, 2, 3, 4, 5, 6, 8], 4, 4, 4, 5
			// left, [1, 2, 3, 4, 5, 6, 8], 4, 3, -1, null
			// right, [1, 2, 3, 4, 5, 6, 8], 5, 4, -1, null
		// right, [1, 2, 3, 4, 5, 6, 8], 6, 6, 6, 8
			// left, [1, 2, 3, 4, 5, 6, 8], 6, 5, -1, null
			// right, [1, 2, 3, 4, 5, 6, 8], 7, 6, -1, null