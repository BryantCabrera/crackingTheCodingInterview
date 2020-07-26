// 2.5 Sum Lists: You have two numvers represented by a linked list, where each node contains a single digit.  The digits are stored in reverse order, such that the 1's digit is at the head of the list.  Write a function that adds thw two numbers and returns the sum as a linked list.

const sumLists = (SinglyLinkedList) => {

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

const input1Values = [1, 6];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode(7));
let valuePointer1 = 0;
while (input1.size() < input1Values.length + 1) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer1]);
	valuePointer1++;
}

const input2Values = [9, 2];
const input2 = new SinglyLinkedList(new SinglyLinkedListNode(5));
let valuePointer2 = 0;
while (input2.size() < input2Values.length + 1) {
	input2.getLast().next = new SinglyLinkedListNode(input2Values[valuePointer2]);
	valuePointer2++;
}

const output1 = sumLists(input1, input2); // Expect: 2 -> 1 -> 9.
console.log(output1.head); // Expect: 2 -> 1 -> 9.