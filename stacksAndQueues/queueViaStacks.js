// 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

// LIFO = Last In, First Out.
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

// FIFO = First In, First Out.
class MyQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	pop () {
		if (this.stack1.elements.length === 0 && this.stack2.elements.length === 0) return 'There are no elements in this queue.';

		if (this.stack1.elements.length) {
			this.invertStack(this.stack1, this.stack2);
		}

		return this.stack2.pop();
	}

	push (element) {
		if (this.stack2.elements.length) {
			this.invertStack(this.stack2, this.stack1);
		}

		this.stack1.push(element);
	}

	invertStack (firstStack, secondStack) {
		for (let i = firstStack.elements.length - 1; i >= 0; i--) {
			secondStack.push(firstStack.pop());
		}
	}
}

const testQueue = new MyQueue();

console.log(testQueue.stack1.elements.length); // Expect: 0.
console.log(testQueue.stack2.elements.length); // Expect: 0.

console.log(testQueue.pop()); // Expect: 'There are no elements in this queue.'.
console.log(testQueue.stack1.elements.length); // Expect: 0.
console.log(testQueue.stack2.elements.length); // Expect: 0.

testQueue.push(1);
console.log(testQueue.stack1.elements.length); // Expect: 1.
console.log(testQueue.stack1.elements); // Expect: [1].
console.log(testQueue.stack2.elements.length); // Expect: 0.
console.log(testQueue.stack2.elements); // Expect: [].

testQueue.push(2);
console.log(testQueue.stack1.elements.length); // Expect: 2.
console.log(testQueue.stack1.elements); // Expect: [1, 2].
console.log(testQueue.stack2.elements.length); // Expect: 0.
console.log(testQueue.stack2.elements); // Expect: [].

console.log(testQueue.pop()); // Expect 1.
console.log(testQueue.stack1.elements.length); // Expect: 0.
console.log(testQueue.stack1.elements); // Expect: [].
console.log(testQueue.stack2.elements.length); // Expect: 1.
console.log(testQueue.stack2.elements); // Expect: [2].

testQueue.push(3);
console.log(testQueue.stack1.elements.length); // Expect: 2.
console.log(testQueue.stack1.elements); // Expect: [2, 3].
console.log(testQueue.stack2.elements.length); // Expect: 0.
console.log(testQueue.stack2.elements); // Expect: [].