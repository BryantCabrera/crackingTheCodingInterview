// 2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.  If x is contained within the list, the values of x only need to be after the elements less than x.

const partition = (singlyLinkedList, partitionValue) => {
	const lessThanPartition = [];
	const equalToPartition = [];
	const greaterThanPartition = [];

	let currentNode = singlyLinkedList.head;
	while (currentNode) {
		if (currentNode.value < partitionValue) {
			lessThanPartition.push(currentNode.value);
		} else if (currentNode.value === partitionValue) {
			equalToPartition.push(currentNode.value);
		} else if (currentNode.value > partitionValue) {
			greaterThanPartition.push(currentNode.value);
		}
		
		currentNode = currentNode.next;
	}

	const mergedArrays = [...lessThanPartition, ...equalToPartition, ...greaterThanPartition];
	let partitionedLinkedList = new SinglyLinkedList(new SinglyLinkedListNode(null));
	let currentNode2 = partitionedLinkedList.head;

	while (mergedArrays.length) {
		if (currentNode2.value === null) {
			currentNode2.value = mergedArrays.shift();
		}
		currentNode2.next = new SinglyLinkedListNode(mergedArrays.shift());
		currentNode2 = currentNode2.next;
	}

	return partitionedLinkedList;
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

const input1Values = [4, 1, 3, 4, 2, 3, 3, 4, 4];
const input1 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer1 = 0;
while (input1.size() < input1Values.length + 1) {
	input1.getLast().next = new SinglyLinkedListNode(input1Values[valuePointer1]);
	valuePointer1++;
}

const output1 = partition(input1, 1); // Given value 1 as the partition.
console.log(output1.size()); // Expect: 10.
console.log(output1.head); // Expect: 1 -> 2 -> 4 -> 3 -> 4 -> 2 -> 3 -> 3 -> 4 -> 4.


const input2Values = [4, 1, 3, 4, 2, 3, 3, 4, 4];
const input2 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer2 = 0;
while (input2.size() < input2Values.length + 1) {
	input2.getLast().next = new SinglyLinkedListNode(input2Values[valuePointer2]);
	valuePointer2++;
}

const output2 = partition(input2, 4); // Given value 4 as the partition.
console.log(output2.size()); // Expect: 10.
console.log(output2.head); // Expect: 2 -> 1 -> 3 -> 2 -> 3 -> 3 -> 4 -> 4 -> 4 -> 4.


const input3Values = [4, 1, 4, 2, 4, 4];
const input3 = new SinglyLinkedList(new SinglyLinkedListNode(2));
let valuePointer3 = 0;
while (input3.size() < input3Values.length + 1) {
	input3.getLast().next = new SinglyLinkedListNode(input3Values[valuePointer3]);
	valuePointer3++;
}

const output3 = partition(input3, 3); // Given value 3 as the partition.
console.log(output3.size()); // Expect: 7.
console.log(output3.head); // Expect: 2 -> 1 -> 2 -> 4 -> 4 -> 4 -> 4.