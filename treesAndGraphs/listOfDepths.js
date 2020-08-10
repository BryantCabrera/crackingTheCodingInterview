// 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists).

const listOfDepths = (binaryTree) => {
	const linkedListsByDepth = [];

	// let currentDepth = 0;
	let currentList = new SinglyLinkedList();

	if (binaryTree.root !== null) {
		currentList.add(binaryTree.root);
	}

	while (currentList.size() > 0) {
		linkedListsByDepth.push(currentList);

		let parentNodes = currentList.head;
		console.log(`parentNodes: ${parentNodes.value}`);

		currentList = new SinglyLinkedList();

		while (parentNodes !== null) {
			if (parentNodes.value.left !== null) {
				currentList.add(parentNodes.value.left);
			}

			if (parentNodes.value.right !== null) {
				currentList.add(parentNodes.value.right);
			}

			parentNodes = parentNodes.next;
		}
	}

	return linkedListsByDepth;
};

class SinglyLinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Implementing/creating a Singly LinkedList.
class SinglyLinkedList {
	// If the head value is not passed, the head is initialized to null.
	constructor (head = null) {
		this.head = head;
	}

	// Add a new node to the LinkedList.
	add (value) {
		if (this.head === null) {
			// If the head is null, create a new node from this value and set it as the head.
			this.head = new SinglyLinkedListNode(value);
		} else {
			// Else, create a new node from this value and set it to the LinkedList's tail's next node.
			this.getLast().next = new SinglyLinkedListNode(value);
		}
	}

	// Returns the number of nodes in the linked list.
	size () {
		let count = 0;
		let node = this.head;

		while (node) {
			count++;
			node = node.next;
		}

		return count;
	}

	// Empties out the list.
	clear () {
		this.head = null;
	}

	// Returns the first node of the linked list.
	getFirst () {
		return this.head;
	}

	// Returns the last node of the linked list.
	getLast () {
		let lastNode = this.head;
		
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}

		return lastNode;
	}
}

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

const arrOfNodesByDepth = listOfDepths(binaryTree1);
console.log(arrOfNodesByDepth);
console.log(arrOfNodesByDepth.length); // Expect: 3.
console.log(arrOfNodesByDepth[0].size()); // Expect: 1.
console.log(arrOfNodesByDepth[1].size()); // Expect: 2.
console.log(arrOfNodesByDepth[2].size()); // Expect: 4.