// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

const returnKthToLast = (linkedList) => {
	let currentNode = linkedList.head;
	while (currentNode.next !== null) {
		// When the next node is null, setting currentNode to null will terminate the while loop.
		currentNode = currentNode.next;
	}

	return `currentNode: ${currentNode}, currentNode's value: ${currentNode.value}`;
};

// Implementing/creating a LinkedList for test inputs
class LinkedList {
	// If the head value is not passed, the head is initialized to null.
	constructor (head = null) {
		this.head = head;
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

		return lastNode
	}
}

class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const input1Values = [4, 1, 3, 4, 2, 3, 3, 4, 4, 5];
const input1 = new LinkedList(new LinkedListNode(2));
let valuePointer = 0;
while (input1.size() < input1Values.length) {
	input1.getLast().next = new LinkedListNode(input1Values[valuePointer]);
	valuePointer++;
}

console.log(returnKthToLast(input1)); // Expect: Node(4).