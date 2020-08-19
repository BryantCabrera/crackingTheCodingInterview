// 8.3 Magic Index: A magic index in an array A[0...n - 1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

const magicIndex1 = (sortedArrWithDistinctInts) => {

};

const input1 = [9, 9, 2, 9, 9, 9];
console.log(magicIndex1(input1)); // Expect: 2.

const input2 = [0, 9, 2, 9, 9, 9];
console.log(magicIndex1(input2)); // Expect: 0, 2.

const input3 = [9, 9, 9, 9, 9, 9];
console.log(magicIndex1(input3)); // Expect: null.