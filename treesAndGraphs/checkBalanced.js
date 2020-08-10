// 4.4 Check Balanced: Implement a function to check if a binary tree is balanced.  For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

const checkBalanced = (binaryTreeRoot) => {
	return compareHeight(binaryTreeRoot) === -1 ? false : true;
};

const compareHeight = (binaryTreeRoot) => {
	if (binaryTreeRoot === null) {
		return 0;
	}

	const leftHeight = compareHeight(binaryTreeRoot.left);
	if (leftHeight === -1) {
		return -1;
	}

	const rightHeight = compareHeight(binaryTreeRoot.right);
	if (rightHeight === -1) {
		return -1;
	}

	const heightDiff = leftHeight - rightHeight;

	if (Math.abs(heightDiff) > 1) {
		// The binary tree is not balanced.
		return -1; 
	} else {
		// Add 1 to the height and return it.
		return Math.max(leftHeight, rightHeight) + 1;
	}
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
console.log(checkBalanced(binaryTree1.root)); // Expect: true.



const input2 = [3, 2, 4, 8, 5, 7, 6];
const binaryTree2 = new BinaryTree(input2);
binaryTree2.root.left.left.left = new BinaryTreeNode(1);
binaryTree2.root.left.left.left.left = new BinaryTreeNode(1);
binaryTree2.root.left.left.left.left.left = new BinaryTreeNode(1);
// console.log(binaryTree2.root);
// Root: 8
	// Left: 2
		// Left: 3
			// Left: 1
				// Left: 1
					// Left: 1
		// Right: 4
	// Right: 7
		// Left: 5
		// Right: 6
console.log(checkBalanced(binaryTree2.root)); // Expect: false.