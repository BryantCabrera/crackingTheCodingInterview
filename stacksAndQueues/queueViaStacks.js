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
		if (this.stack1.elements.length === 0 && this.stack1.elements.length === 0) return 'No new elements in '

		if (this.stack1.elements.length) {
			// for (let i = this.stack1.elements.length - 1; i >= 0; i--) {
			// 	this.stack2.push(this.stack1.pop());
			// }

			this.invertStack(this.stack1, this.stack2);
		}

		return this.stack2.pop();
	}

	push (element) {

	}

	invertStack (firstStack, secondStack) {
		for (let i = this.firstStack.elements.length - 1; i >= 0; i--) {
			this.secondStack.push(this.firstStack.pop());
		}
	}
}