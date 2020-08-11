// 4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree.

const validateBST = (binaryTreeRoot) => {
	// Passing in null arguments for min and max will make the root always pass the check.
	return checkBranch(binaryTreeRoot, null, null);
};

const checkBranch = (binaryTreeNode, min, max) => {
	// Base Case: If root is null, return null.
	if (binaryTreeNode === null) return true;

	// Depth-First Search with recursion.
	// const left = binaryTreeNode.left;
	// if (min !== null && left.value <= min) {
	// 	checkBranch(left, min, left.value);
	// } 

	// console.log(`left: ${left}`);

	// const right = binaryTreeNode.right;
	// if (max !== null && right.value > max) {
	// 	checkBranch(right, right.value, max);
	// } 

	// console.log(`right: ${right}`);

	if ((min !== null && binaryTreeNode.value <= min) || (max !== null && binaryTreeNode.value > max)) {
		return false;
	}

	if ((!checkBranch(binaryTreeNode.left, min, binaryTreeNode.value) || !checkBranch(binaryTreeNode.right, binaryTreeNode.value, max))) {
		return false;
	}


	return true;
};

// Implements a binary tree.
class BinaryTree {
	constructor (arr = []) {
		this.root = this.createBinaryTree(arr, 0, arr.length - 1)
	}

	createBinaryTree (arr, startIndex, endIndex) {
		// EDGE CASE: If the array is empty or not and array, return null.
		if (arr.length === 0 || !Array.isArray(arr)) return null;

		// Once the endIndex is less than the startIndex, return null.
		// This effectively begins processing a new branch.
		if (endIndex < startIndex) return null;
		
		// Find the value in the middle of the array.  This will be the root.
		// We arbitrarily Math.floor because in the case of an array with an odd length, either the node to the left of the midpoint index value or to the right of the index value (e.g. 2 or 3 in the case the midpoint is 2.5) will suffice as the root.
		const midpoint = Math.floor((startIndex + endIndex) / 2);
		
		// Create a new BinaryTreeNode.
		const node = new BinaryTreeNode(arr[midpoint]);
		
		// Recursively create the left and right nodes of the current node.
		node.left = this.createBinaryTree(arr, startIndex, midpoint - 1);
		node.right = this.createBinaryTree(arr, midpoint + 1, endIndex);
	
		return node;
	};
}

class BinaryTreeNode {
	constructor (value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

const input1 = [3, 2, 4, 8, 5, 7, 6];
const binaryTree1 = new BinaryTree(input1);
// console.log(binaryTree1.root);
// Root: 8
	// Left: 2
		// Left: 3
		// Right: 4
	// Right: 7
		// Left: 5
		// Right: 6
console.log(validateBST(binaryTree1.root)); // Expect: false.


const input2 = [1, 2, 3, 4, 5, 6, 8];
const binaryTree2 = new BinaryTree(input2);
// console.log(binaryTree2.root);
// Root: 4
	// Left: 2
		// Left: 1
		// Right: 3
	// Right: 6
		// Left: 5
		// Right: 8
	console.log(validateBST(binaryTree2.root)); // Expect: true.