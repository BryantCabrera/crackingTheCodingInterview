// 2.7 Intersection: Given two (singly) linked lists, determine if the two lists intersect.  Return the intersecting node.  Note that the intersection is defined based on reference, not value.  That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

const intersection = (singlyLinkedList1, singlyLinkedList2) => {
	let currentNode1 = singlyLinkedList1.head;
	let currentNode2 = singlyLinkedList2.head;
	let list1Arr = [];
	let list2Arr = [];
	while (currentNode1 || currentNode2) {
		if (currentNode1) {
			list1Arr.push(currentNode1);
			currentNode1 = currentNode1.next;
		}
		if (currentNode2) {
			list2Arr.push(currentNode2);
			currentNode2 = currentNode2.next;
		};
	}
	// console.log(`list1Arr: ${list1Arr[list1Arr.length - 1].value}, list2Arr: ${list2Arr}`);

	const difference = Math.abs(list1Arr.length - list2Arr.length);
	let list1ArrPointer = list1Arr.length - 1;
	let list2ArrPointer = list2Arr.length - 1;

	let currentIntersection;
	// while (list1ArrPointer < list1Arr.length || list2ArrPointer < list2Arr.length) {
	while (list1ArrPointer && list2ArrPointer) {
		// console.log('pointers: ', list1ArrPointer, list2ArrPointer, difference, list1Arr[list1ArrPointer]);
		// If the linked lists intersect, at the very least, the last node will be the same.  Any node after the intersection will have the same value.
		// Therefore, if we are iterating through the values backwards, we check that each element in either array is equal.  The node right before they differ is the point of intersection.
		if (list1Arr[list1ArrPointer].value === list2Arr[list2ArrPointer].value) {
			currentIntersection = list1Arr[list1ArrPointer];
		} else {
			currentIntersection = false;
			break;
		}

		if (list1Arr.length > list2Arr.length) {
			list1ArrPointer -= difference;
			list2ArrPointer--;
		} else if (list1Arr.length < list2Arr.length) {
			list1ArrPointer--;
			list2ArrPointer -= difference;
		} else {
			// console.log('entering else');
			list1ArrPointer--;
			list2ArrPointer--;
		}
	}

	return currentIntersection;
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

const input1 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input1.createLinkedList([1, 2, 3]); // Creates a SinglyLinkedList: 1 -> 2 -> 3

const input2 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input2.createLinkedList([5, 2, 3]); // Creates a SinglyLinkedList: 5 -> 2 -> 3

console.log(intersection(input1, input2)); // Expect: true, 2 -> 3.


const input3 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input3.createLinkedList([1, 2, 3]); // Creates a SinglyLinkedList: 1 -> 2 -> 3

const input4 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input4.createLinkedList([5, 2, 4]); // Creates a SinglyLinkedList: 5 -> 2 -> 4

console.log(intersection(input3, input4)); // Expect: false.


const input5 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input5.createLinkedList([1, 2, 3]); // Creates a SinglyLinkedList: 1 -> 2 -> 3

const input6 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input6.createLinkedList([5, 8, 2, 3]); // Creates a SinglyLinkedList: 5 -> 8, 2 -> 3

console.log(intersection(input5, input6)); // Expect: true, 2 -> 3.


const input7 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input7.createLinkedList([1, 2, 3]); // Creates a SinglyLinkedList: 1 -> 2 -> 3

const input8 = new SinglyLinkedList; // Instantiates a new SinglyLinkedList
input8.createLinkedList([5, 8, 2, 4]); // Creates a SinglyLinkedList: 5 -> 8, 2 -> 3

console.log(intersection(input7, input8)); // Expect: false.