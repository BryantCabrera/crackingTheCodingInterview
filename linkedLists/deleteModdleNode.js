// 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

const deleteMiddleNode = (linkedList) => {

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

class SinglyLinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const input1Values = [4, 1, 3, 4, 2, 3, 3, 4, 4, 5];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer = 0;
while (input1.size() < input1Values.length) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer]);
	valuePointer++;
}

console.log(returnKthToLast(input1)); // Expect: Node(4).