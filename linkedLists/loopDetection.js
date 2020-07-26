// 2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

const loopDetection = (singlyLinkedList) => {

};

// Implementing/creating a Singly LinkedList for test inputs
class SinglyLinkedList {
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

	// Creates a linked list from a given array of inputs.
	createLinkedList (arr) {
		if (!arr.length) return;

		this.head = new SinglyLinkedListNode(arr.shift());

		let currentNode = this.head;
		while (arr.length) {
			currentNode.next = new SinglyLinkedListNode(arr.shift());
			currentNode = currentNode.next;
		}
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

class SinglyLinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const input1 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList.
input1.createLinkedList(['A', 'B', 'C', 'D', 'E', 'C']); // Creates a SinglyLinkedList: 'A -> 'B' -> 'C' -> 'D' -> 'E' -> 'C'.

console.log(loopDetection(input1)); // Expect: true, SinglyLinkedListNode('C');


const input2 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList.
input2.createLinkedList(['A', 'B', 'C', 'D', 'E']); // Creates a SinglyLinkedList: 'A -> 'B' -> 'C' -> 'D' -> 'E'.

console.log(loopDetection(input2)); // Expect: false.