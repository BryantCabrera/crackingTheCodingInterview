// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

const removeDups = (singlyLinkedList) => {
	// Set currentNode to head of SinglyLinkedList.
	let currentNode = singlyLinkedList.head;
	// Because we investigate the currentNode.next, we have to initialize the hashMap with the head's value.
	const hashMap = {
		[currentNode.value]: 1
	};

	// We are checking currentNode.next so that we can edit the next pointer of the currentNode since this is a singly-linked list and we won't be able to traverse back up to the previousNode to make necessary edits.
	while (currentNode) {
		if (currentNode.next) {
			if (hashMap[currentNode.next.value]) {
				// If the hashMap contains the value of the next node, it is a duplicate.  So, remove it from the SinglyLinkedList by setting currentNode's 'next' to the next node's 'next'.
				currentNode.next = currentNode.next.next;
			} else {
				// If the next node's value is not in the hashMap, it is the first instance of that node, so add it to the hashMap.
				hashMap[currentNode.next.value] = 1;
				// Continue traversing the rest of the SinglyLinkedList without modification.
				currentNode = currentNode.next;
			}
		} else {
			// Effectively sets the currentNode to null to terminate the while loop.
			currentNode = currentNode.next;
		}
	}
};

// Implementing/creating a SinglyLinkedList for test inputs
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

const input1Values = [4, 1, 3, 4, 2, 3, 3, 4, 4];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer = 0;
while (input1.size() < input1Values.length + 1) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer]);
	valuePointer++;
}

console.log(removeDups(input1)); // Expect SinglyLinkedList to be: 2 -> 4 -> 1 -> 3
console.log(input1.size()); // Expect: 4