// 4.6 Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree.  You may assume that each node has a link to its parent.

const successor = () => {
	// In-Order Traversal is LCR (Left Node -> Current/Parent Node -> Right Node).


};

// Implements a binary tree.
class BinaryTree {
	constructor (arr = []) {
		this.root = this.createBinaryTree(arr, 0, arr.length - 1)
	}

	createBinaryTree (arr, startIndex, endIndex, parent = null) {
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
		
		// Recursively create the parent, left, and right nodes of the current node.
		node.parent = parent;
		node.left = this.createBinaryTree(arr, startIndex, midpoint - 1, node);
		node.right = this.createBinaryTree(arr, midpoint + 1, endIndex, node);
	
		return node;
	};
}

class BinaryTreeNode {
	constructor (value) {
		this.value = value;
		this.parent = null;
		this.right = null;
		this.left = null;
	}
}

// In order to create a binary search tree for this test case, I just need to pass in a sorted array to my BinaryTree class.
const input1 = [1, 2, 3, 4, 5, 6, 8];
const binaryTree1 = new BinaryTree(input1);
// console.log(binaryTree1.root); // Expect: Parent: null.
// console.log(binaryTree1.root.left); // Expect: Parent: BinaryTreeNode(4).
// console.log(binaryTree1.root.left.left); // Expect: Parent: BinaryTreeNode(2).
// console.log(binaryTree1.root.left.right); // Expect: Parent: BinaryTreeNode(2).
// console.log(binaryTree1.root.right); // Expect: Parent: BinaryTreeNode(4).
// console.log(binaryTree1.root.right.left); // Expect: Parent: BinaryTreeNode(6).
// console.log(binaryTree1.root.right.right); // Expect: Parent: BinaryTreeNode(6).
// Root: 4
	// Left: 2
		// Left: 1
		// Right: 3
	// Right: 6
		// Left: 5
		// Right: 8

// console.log(successor(binaryTree1.root)); // Expect: BinaryTreeNode(6);
// console.log(successor(binaryTree1.left)); // Expect: BinaryTreeNode(3);
// console.log(successor(binaryTree1.left.right)); // Expect: BinaryTreeNode(4);
// console.log(successor(binaryTree1.right.right)); // Expect: null;