// 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top.  You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).  The stack supports the following operations: push, pop, peek, and isEmpty.

// LIFO = Last In, First Out.
class Stack {
	constructor() {
		this.elements = [];
	}

	isEmpty () {
		return this.elements.length === 0;
	}

	peek () {
		return this.elements[this.elements.length - 1];
	}

	pop () {
		return this.elements.pop();
	}

	push (element) {
		this.elements.push(element);
	}
}

const sortStack = (stack) => {
	const additionalStack = new Stack();

	while (!stack.isEmpty()) {
		let tempMin = stack.pop();

		while (!additionalStack.isEmpty() && additionalStack.peek() < tempMin) {
			stack.push(additionalStack.pop());
		}

		additionalStack.push(tempMin);
	}

	return additionalStack;
};

const testStack = new Stack();
testStack.push(1);
testStack.push(5);
testStack.push(3);
testStack.push(3);
testStack.push(4);
testStack.push(2);
console.log(testStack.elements); // Expect: [1, 5, 3, 3, 4, 2];
console.log(sortStack(testStack).elements); // Expect: [5, 4, 3, 3, 2, 1].