// 3.6 Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.  People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).  They cannot select which specific animal they would like.  Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.  You may use the built-in LinkedList data structure.

class SinglyLinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Implementing/creating a Singly LinkedList.
class SinglyLinkedList {
	// If the head value is not passed, the head is initialized to null.
	constructor (head = null) {
		this.head = head;
	}

	// Add a new node to the LinkedList.
	add (value) {
		if (this.head === null) {
			// If the head is null, create a new node from this value and set it as the head.
			this.head = new SinglyLinkedListNode(value);
		} else {
			// Else, create a new node from this value and set it to the LinkedList's tail's next node.
			this.getLast().next = new SinglyLinkedListNode(value);
		}
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

// Implementing a Queue using a SinglyLinkedList.
class Queue {
	constructor () {
		this.elements = new SinglyLinkedList();
	}

	peek () {
		if (this.elements.head === null) return 'There are no elements in this queue.';

		return this.elements.head.value;
	}

	pop () {
		if (this.elements.length === 0) return 'There are no elements in this queue.';

		// Cache the popped element's value.
		const poppedElement = this.elements.head.value;

		// In a SinglyLinkedList, head.next becomes the new head.  Delete the head.
		this.elements.head = this.elements.head.next;

		// Return the popped element.
		return poppedElement;
	}

	push (item) {
		// Add an item to the tail of the LinkedList.
		this.elements.add(item);
	}
}

// Implementing a Queue using a stack.
// class Queue {
// 	constructor () {
// 		this.elements = [];
// 	}

// 	peek () {
// 		if (this.elements.length === 0) return 'There are no elements in this queue.';

// 		return this.elements[0];
// 	}

// 	pop () {
// 		if (this.elements.length === 0) return 'There are no elements in this queue.';

// 		return this.elements.shift();
// 	}

// 	push (item) {
// 		this.elements.push(item);
// 	}
// }

class AnimalShelter {
	constructor () {
		this.dogs = new Queue();
		this.cats = new Queue();
		this.order = 0;
	}

	enqueue (animalType) {
		// Increment the order counter.
		this.order++;

		// If the animal being queued is a dog, add it to the dog LinkedList.
		if (animalType.match(/^dog$/i)) {
			this.dogs.push(this.order);
		} else if (animalType.match(/^cat$/i)) {
			this.cats.push(this.order);
		}
	}

	dequeueAny () {
		// If both dogs and cats have no elements, handle the error.
		if (this.dogs.peek() === null && this.cats.peek() === null) {
			return 'There are no animals in the shelter right now.';
		}

		const oldestDog = this.dogs.elements.head;
		const oldestCat = this.cats.elements.head;

		// If only one type of animal is available, return the oldest of that animal.
		if (!oldestDog && oldestCat) {
			return this.cats.pop();
		} else if (!oldestCat && oldestDog) {
			return this.dogs.pop();
		}

		// Return the oldest animal overall.
		if (oldestDog.value < oldestCat.value) {
			return this.dogs.pop();
		} else if (oldestCat.value < oldestDog.value) {
			return this.cats.pop();
		}
	}

	dequeueCat () {
		// If there are cats in the shelter, pop a cat, else handle the error.
		return this.cats.peek() !== null ? this.cats.pop() : 'There are no cats in the shelter right now.';
	}

	dequeueDog () {
		// If there are dogs in the shelter, pop a cat, else handle the error.
		return this.dogs.peek() !== null ? this.dogs.pop() : 'There are no dogs in the shelter right now.';
	}
}

const testAnimalShelter = new AnimalShelter();

testAnimalShelter.enqueue('cat');
console.log('~~~~~~~~~~~~~~~Test Case 1~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 1.
console.log(testAnimalShelter.cats.elements.size()); // Expect: 1.
console.log(testAnimalShelter.dogs.peek()); // Expect: 'There are no elements in this queue.'.

testAnimalShelter.enqueue('Cat');
console.log('~~~~~~~~~~~~~~~Test Case 2~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 1.
console.log(testAnimalShelter.cats.elements.getLast()); // Expect: SinglyLinkedListNode(2).
console.log(testAnimalShelter.cats.elements.size()); // Expect: 2.
console.log(testAnimalShelter.dogs.peek()); // Expect: 'There are no elements in this queue.'.

testAnimalShelter.enqueue('Cat');
testAnimalShelter.dequeueAny();
console.log('~~~~~~~~~~~~~~~Test Case 3~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 2.
console.log(testAnimalShelter.cats.elements.getLast()); // Expect: SinglyLinkedListNode(3).
console.log(testAnimalShelter.cats.elements.size()); // Expect: 2.
console.log(testAnimalShelter.dogs.peek()); // Expect: 'There are no elements in this queue.'.

testAnimalShelter.enqueue('dog');
console.log('~~~~~~~~~~~~~~~Test Case 4~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 2.
console.log(testAnimalShelter.cats.elements.getLast()); // Expect: SinglyLinkedListNode(3).
console.log(testAnimalShelter.cats.elements.size()); // Expect: 2.
console.log(testAnimalShelter.dogs.peek()); // Expect: 4.
console.log(testAnimalShelter.dogs.elements.getLast()); // Expect: SinglyLinkedListNode(4).
console.log(testAnimalShelter.dogs.elements.size()); // Expect: 1.

testAnimalShelter.enqueue('dog');
testAnimalShelter.dequeueAny();
console.log('~~~~~~~~~~~~~~~Test Case 5~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 3.
console.log(testAnimalShelter.cats.elements.getLast()); // Expect: SinglyLinkedListNode(3).
console.log(testAnimalShelter.cats.elements.size()); // Expect: 1.
console.log(testAnimalShelter.dogs.peek()); // Expect: 4.
console.log(testAnimalShelter.dogs.elements.getLast()); // Expect: SinglyLinkedListNode(5).
console.log(testAnimalShelter.dogs.elements.size()); // Expect: 2.

testAnimalShelter.dequeueDog();
console.log('~~~~~~~~~~~~~~~Test Case 5~~~~~~~~~~~~~~~');
console.log(testAnimalShelter.cats.peek()); // Expect: 3.
console.log(testAnimalShelter.cats.elements.getLast()); // Expect: SinglyLinkedListNode(3).
console.log(testAnimalShelter.cats.elements.size()); // Expect: 1.
console.log(testAnimalShelter.dogs.peek()); // Expect: 5.
console.log(testAnimalShelter.dogs.elements.getLast()); // Expect: SinglyLinkedListNode(5).
console.log(testAnimalShelter.dogs.elements.size()); // Expect: 1.