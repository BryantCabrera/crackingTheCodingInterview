// 3.3 Stack of Plates: Imagine a (literal) stack of plates.  If the stack gets too high, it might topple.  Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.  Implement a data structure `SetOfStacks` that mimics this.  `SetOfStacks` should be composed of several stacks and should create a new stack once the previous one exceeds capacity.  SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

// FOLLOW UP: Implement a fucntion popAt(int index) which performs a pop operation on a specific sub-stack.
// Assumptions: If popAt() a stack, pushing still happens on the last stack in the SetOfStacks, not on the newly 

class Stack {
	constructor() {
		this.elements = [];
	}

	pop () {
		return this.elements.pop();
	}

	push (element) {
		this.elements.push(element);
	}
}

class SetOfStacks {
	constructor() {
		this.capacity = 2;
		this.stacks = [];
	}

	pop () {
		// If there are no stacks return an error message.
		// OR there is only 1 empty stack, return an error message.
		// || (this.stacks.length === 1 && this.stacks[this.stacks.length - 1].length === 0)
		if (this.stacks.length === 0) return 'There are no stacks in this set of stacks.';

		// Cache the popped element.
		const poppedElement = this.stacks[this.stacks.length - 1].pop();

		// If after we've popped an element, the last stack in SetOfStacks is empty, pop that array from the SetOfStacks.
		if (this.stacks[this.stacks.length - 1].elements.length === 0) this.stacks.pop();

		// Return the popped element.
		return poppedElement;
	}

	popAt (index) {
		// If the index is not present in the set of stacks, return error messaging.
		if (this.stacks.length - 1 < index) return 'That index does not exist in the current set of stacks.';

		// Cache the popped element.
		const poppedElement = this.stacks[index].pop();

		// Here, we can choose to sacrifice some performance by shifting everything else in the stacks indexed greated than the index argument to the left 1 index.  However, for efficiency's sake, we will assume that it is ok to have non-full stacks.

		// Return the popped element.
		return poppedElement;
	}

	push (element) {
		// If the last stack in SetOfStacks is at capacity OR there are no stacks in SetOfStacks, push in a new stack into SetOfStacks.
		if (this.stacks.length === 0 || this.stacks[this.stacks.length - 1].elements.length === this.capacity) {
			this.stacks.push(new Stack());
		}

		// Push in the element.
		this.stacks[this.stacks.length - 1].push(element);
	}
}

const testSetOfStacks = new SetOfStacks();
testSetOfStacks.push(1);
testSetOfStacks.push(2);
testSetOfStacks.push(3);
console.log(testSetOfStacks.stacks.length); // Expect: 2.
console.log(testSetOfStacks.stacks[testSetOfStacks.stacks.length - 1].elements.length); // Expect: 1.
console.log(testSetOfStacks.stacks); // Expect: [[1, 2], [3]].

console.log(testSetOfStacks.pop()); // Expect: 3.
console.log(testSetOfStacks.stacks.length); // Expect: 1.
console.log(testSetOfStacks.stacks[testSetOfStacks.stacks.length - 1].elements.length); // Expect: 2.
console.log(testSetOfStacks.stacks); // Expect: [[1, 2]].

console.log(testSetOfStacks.pop()); // Expect: 2.
console.log(testSetOfStacks.stacks.length); // Expect: 1.
console.log(testSetOfStacks.stacks[testSetOfStacks.stacks.length - 1].elements.length); // Expect: 1.
console.log(testSetOfStacks.stacks); // Expect: [[1]].

console.log(testSetOfStacks.pop()); // Expect: 1.
console.log(testSetOfStacks.stacks.length); // Expect: 0.
// console.log(testSetOfStacks.stacks[testSetOfStacks.stacks.length - 1].elements.length); // Expect: undefined.
console.log(testSetOfStacks.stacks); // Expect: [].

console.log(testSetOfStacks.pop()); // Expect: 'There are no stacks in this set of stacks.'.
console.log(testSetOfStacks.stacks.length); // Expect: 0.
// console.log(testSetOfStacks.stacks[testSetOfStacks.stacks.length - 1].elements.length); // Expect: undefined.
console.log(testSetOfStacks.stacks); // Expect: [].


// FOLLOW UP: Test Cases
testSetOfStacks.push(1);
testSetOfStacks.push(2);
testSetOfStacks.push(3);

console.log(testSetOfStacks.popAt(0)); // Expect: 2.
console.log(testSetOfStacks.stacks.length); // Expect: 2.
console.log(testSetOfStacks.stacks[0].elements.length); // Expect: 1.
console.log(testSetOfStacks.stacks[1].elements.length); // Expect: 1.