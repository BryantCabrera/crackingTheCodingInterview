// 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

const deleteMiddleNode = (singlyLinkedListNode) => {
	// Reassign current node's value to the next node's value.
	singlyLinkedListNode.value = singlyLinkedListNode.next.value;
	// Reassign current node's 'next' value to the next node's 'next'.
	singlyLinkedListNode.next = singlyLinkedListNode.next;
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

const input1Values = ['b', 'c', 'd', 'e'];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode('a'));
let valuePointer1 = 0;
while (input1.size() < input1Values.length) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer1]);
	valuePointer1++;
}

deleteMiddleNode(input1.head.next.next); // Given SinglyLinkedListNode('c') as the input.
console.log(input1.size()); // Expect: 4.
console.log(input1.head.next.value); // Expect: 'b'.
console.log(input1.head.next.next.value); // Expect: 'd'.

const input2Values = ['b', 'c', 'd'];
const input2 = new SinglyLinkedList(new SinglyLinkedListNode('a'));
let valuePointer2 = 0;
while (input2.size() < input2Values.length) {
	input2.getLast().next = new SinglyLinkedListNode(input2Values[valuePointer2]);
	valuePointer2++;
}

deleteMiddleNode(input2.head.next); // Given SinglyLinkedListNode('b') as the input.
console.log(input2.size()); // Expect: 3.
console.log(input2.head.value); // Expect: 'a'.
console.log(input2.head.next.value); // Expect: 'c'.