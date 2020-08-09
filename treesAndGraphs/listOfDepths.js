// 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists).

const listOfDepths = () => {

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
console.log(binaryTree1.root);
// Root: 8
	// Left: 2
		// Left: 3
		// Right: 4
	// Right: 7
		// Left: 5
		// Right: 6