// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list

const removeDups = (linkedList) => {
	// Set currentNode to head of LinkedList
	let currentNode = linkedList.head;
	// Because we investigate the currentNode.next, we have to initialize the hashMap with the head's value
	const hashMap = {
		[currentNode.value]: 1
	};

	// We are checking currentNode.next so that we can edit the next pointer of the currentNode since this is a singly-linked list and we won't be able to traverse back up to the previousNode to make necessary edits
	while (currentNode !== null) {
		if (currentNode.next !== null) {
			if (hashMap[currentNode.next.value]) {
				currentNode.next = currentNode.next.next;
			} else {
				hashMap[currentNode.next.value] = 1;
				currentNode = currentNode.next;
			}
		} else {
			currentNode = currentNode.next;
		}
	}
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

const input1Values = [4, 1, 3, 4, 2, 3, 3, 4, 4];
const input1 = new LinkedList(new LinkedListNode(2));
let valuePointer = 0;
while (input1.size() < input1Values.length) {
	input1.getLast().next = new LinkedListNode(input1Values[valuePointer]);
	valuePointer++;
}

console.log(removeDups(input1)); // Expect LinkedList to be: 2 -> 4 -> 1 -> 3
console.log(input1.size()); // Expect: 4