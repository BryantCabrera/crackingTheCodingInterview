// 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

const palindrome = (singlyLinkedList) => {
	let currentNode = singlyLinkedList.head;
	const nodeArr = [];
	while (currentNode) {
		nodeArr.push(currentNode.value);
		currentNode = currentNode.next;
	}
	
	const isPalindrome = (arr) => {
		let pointerForward = 0;
		let pointerBackward = arr.length - 1;

		while (pointerForward < pointerBackward) {
			// If the arr has an even number of elements, the middle 2 elements will be checked against each other.
			// If the arr has an off number of elements, the pointers will point to the same element and this check will still run.
			if (arr[pointerForward] !== arr[pointerBackward]) {
				// If we find a mismatch, break out of the loop and return false.
				return false;
			}

			pointerForward++;
			pointerBackward--;
		}

		return true;
	};

	return isPalindrome(nodeArr);
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

const input1Values = [1, 7];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode(7));
let valuePointer1 = 0;
while (input1.size() < input1Values.length + 1) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer1]);
	valuePointer1++;
}

console.log(palindrome(input1)); // Expect: true.


const input2Values = [1, 7];
const input2 = new SinglyLinkedList(new SinglyLinkedListNode(5));
let valuePointer2 = 0;
while (input2.size() < input2Values.length + 1) {
	input2.getLast().next = new SinglyLinkedListNode(input2Values[valuePointer2]);
	valuePointer2++;
}

console.log(palindrome(input2)); // Expect: false.


const input3Values = [1, 1, 6];
const input3 = new SinglyLinkedList(new SinglyLinkedListNode(6));
let valuePointer3 = 0;
while (input3.size() < input3Values.length + 1) {
	input3.getLast().next = new SinglyLinkedListNode(input3Values[valuePointer3]);
	valuePointer3++;
}

console.log(palindrome(input3)); // Expect: true.