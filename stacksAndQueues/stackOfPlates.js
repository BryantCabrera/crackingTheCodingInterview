// 3.3 Stack of Plates: Imagine a (literal) stack of plates.  If the stack gets too high, it might topple.  Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.  Implement a data structure `SetOfStacks` that mimics this.  `SetOfStacks` should be composed of several stacks and should create a new stack once the previous one exceeds capacity.  SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

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
		if (this.stacks.length === 0) return 'There are no stacks in this set of stacks';

		// Cache the popped element.
		const poppedElement = this.stacks[this.stacks.length - 1].pop();

		// If after we've popped an element, the last stack in SetOfStacks is empty, pop that array from the SetOfStacks.
		if (this.stacks[this.stacks.length - 1].elements.length === 0) this.stacks.pop();

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