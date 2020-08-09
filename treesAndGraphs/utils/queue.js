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

// Implementing a Queue using a SinglyLinkedList.
export class Queue {
	constructor () {
		this.elements = new SinglyLinkedList();
	}

	peek () {
		if (this.elements.head === null) return 'There are no elements in this queue.';

		return this.elements.head.value;
	}

	pop () {
		if (this.elements.length === 0) return 'There are no elements in this queue.';

		// Cache the popped element's value.
		const poppedElement = this.elements.head.value;

		// In a SinglyLinkedList, head.next becomes the new head.  Delete the head.
		this.elements.head = this.elements.head.next;

		// Return the popped element.
		return poppedElement;
	}

	push (item) {
		// Add an item to the tail of the LinkedList.
		this.elements.add(item);
	}
}