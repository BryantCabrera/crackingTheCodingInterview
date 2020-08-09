// 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

const minimalTree = (arr, startIndex, endIndex) => {
	if (endIndex < startIndex) return null;
	const midpoint = Math.floor((startIndex + endIndex) / 2);

	const node = new TreeNode(arr[midpoint]);

	node.left = minimalTree(arr, startIndex, midpoint - 1);
	node.right = minimalTree(arr, midpoint + 1, endIndex);

	return node;
};

class TreeNode {
	constructor (value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

const input1 = [1, 2, 3, 5, 8, 10];
console.log(minimalTree(input1, 0, input1.length - 1));  // Expect: height of 3.

const input2 = [1, 2, 3, 4, 5, 6, 8];
console.log(minimalTree(input2, 0, input2.length - 1));  // Expect: height of 3.