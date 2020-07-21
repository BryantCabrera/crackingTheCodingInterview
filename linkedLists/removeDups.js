// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

const removeDups = (linkedList) => {

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


const input1 = new LinkedList(node1);