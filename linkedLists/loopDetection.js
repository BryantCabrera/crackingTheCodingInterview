// 2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

const loopDetection = (singlyLinkedList) => {
	let slowPointer = singlyLinkedList.head;
	let fastPointer = singlyLinkedList.head;

	// Find the first collision point which will be at (loop size - k) where k is the number of nodes before entering the loop.
	while (fastPointer !== null && fastPointer.next !== null) {
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;

		// This conditional and loop terminator needs to be in this part of the loop and not in the while loop argument because otherwise, the loop would not initiate as both pointers are initialized to the head of the same singlyLinkedList.
		if (slowPointer.value === fastPointer.value) break;
	}

	// If there is no loop cycle, return null.
	if (fastPointer === null || fastPointer.next === null) {
		return null;
	}

	// Point slowPointer back to the head of the singlyLinkedList, but keep fastPointer at 1st collision point.
	slowPointer = singlyLinkedList.head;

	// Traversing the linkedList 1 node at a time will result in a 2nd collision at the start of the loop.
	while (slowPointer.value != fastPointer.value) {
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next;
	}

	return fastPointer;
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
input1.createLinkedList(['A', 'B', 'C', 'D', 'E']); // Creates a SinglyLinkedList: 'A -> 'B' -> 'C' -> 'D' -> 'E'.
input1.getLast().next = input1.head.next.next; // Creates a SinglyLinkedList with a loop: 'A -> 'B' -> 'C' -> 'D' -> 'E' -> 'C'.
// console.log('input1 last', input1.getLast()); // To check if a loop was indeed created; this won't terminate.
console.log(loopDetection(input1)); // Expect: true, SinglyLinkedListNode('C');


const input2 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList.
input2.createLinkedList(['A', 'B', 'C', 'D', 'E']); // Creates a SinglyLinkedList: 'A -> 'B' -> 'C' -> 'D' -> 'E'.
console.log(loopDetection(input2)); // Expect: null.