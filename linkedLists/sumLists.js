// 2.5 Sum Lists: You have two numvers represented by a linked list, where each node contains a single digit.  The digits are stored in reverse order, such that the 1's digit is at the head of the list.  Write a function that adds the two numbers and returns the sum as a linked list.

const sumListsReverse = (singlyLinkedList1, singlyLinkedList2) => {
	let currentNode1 = singlyLinkedList1.head;
	let currentNode2 = singlyLinkedList2.head;

	let summedList = new SinglyLinkedList(new SinglyLinkedListNode(null));
	let currentNodeSummed = summedList.head;
	let carry = 0;
	while (currentNode1 && currentNode2) {
		let currentSum = currentNode1.value + currentNode2.value + carry;

		currentNodeSummed.value = currentSum > 10 ? currentSum - 10 : currentSum;
		carry = currentSum > 10 ? 1 : 0;

		if (currentNode1.next && currentNode2.next) {
			currentNodeSummed.next = new SinglyLinkedListNode(null);
			currentNodeSummed = currentNodeSummed.next;
		}

		currentNode1 = currentNode1.next;
		currentNode2 = currentNode2.next;
	}

	return summedList;
};

// Suppose the digits are stored in forward order.  Repeat the above problem.
const sumListsForward = (singlyLinkedList1, singlyLinkedList2) => {
	let currentNode1 = singlyLinkedList1.head;
	let num1 = '';
	let currentNode2 = singlyLinkedList2.head;
	let num2 = '';

	while (currentNode1 && currentNode2) {
		// Store values as a string as we cannot tell how long the input linkedList is, and therefore cannot tell the current digit's place.
		num1 += `${currentNode1.value}`;
		num2 += `${currentNode2.value}`;

		currentNode1 = currentNode1.next;
		currentNode2 = currentNode2.next;
	}

	// Convert strings into integers.
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	// Sum the integers and split it into an array to make each digit iterable.
	const sum = (num1 + num2).toString().split('');

	// Initialize linked list with 1st digit in sum array.
	let summedList = new SinglyLinkedList(new SinglyLinkedListNode(sum[0]));
	let currentNodeSummed = summedList.head;
	for (let i = 1; i < sum.length; i++) {
		// Set the next node in the LinkedList equal to the current digit element in the array.
		currentNodeSummed.next = new SinglyLinkedListNode(sum[i]);
		currentNodeSummed = currentNodeSummed.next;
	}

	return summedList;
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

		return lastNode;
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

const output1 = sumListsReverse(input1, input2); // Expect: 2 -> 1 -> 9.
console.log(output1.size()); // Expect: 3.
console.log(output1.head); // Expect: 2 -> 1 -> 9.

const input3Values = [1, 7];
const input3 = new SinglyLinkedList(new SinglyLinkedListNode(6));
let valuePointer3 = 0;
while (input3.size() < input3Values.length + 1) {
	input3.getLast().next = new SinglyLinkedListNode(input3Values[valuePointer3]);
	valuePointer3++;
}

const input4Values = [9, 5];
const input4 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer4 = 0;
while (input4.size() < input4Values.length + 1) {
	input4.getLast().next = new SinglyLinkedListNode(input4Values[valuePointer4]);
	valuePointer4++;
}

const output2 = sumListsForward(input3, input4); // Expect: 9 -> 1 -> 2.
console.log(output2.size()); // Expect: 3.
console.log(output2.head); // Expect: 9 -> 1 -> 2.