// 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?  Push, pop and min should all operate in O(1) time.

class Stack {
	constructor() {
		this.elements = [];
		this.min = [];
	}

	pop () {
		const poppedElement = this.elements.pop();
		if (poppedElement === this.min[this.min.length - 1]) {
			this.min.pop();
		}

		return poppedElement;
	}

	push (item) {
		// At the moment we push(), we evaluate if this new value is less than the current min, and if so, reassign it.
		if (item <= this.min[this.min.length - 1]) {
			this.min.push(item);
		}
		this.elements.push(item);
	}

	min () {
		return this.min[this.min.length - 1];
	}
}