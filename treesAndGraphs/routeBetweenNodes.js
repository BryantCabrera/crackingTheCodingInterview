// 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// The solution will involve a Breadth-First Search fo determine if any path exists between 2 nodes.
const routeBetweenNodes = (graph, node1, node2) => {
	const nodesQueue = new Queue();

	// Initialize nodesQueue with the neighbors of node1
	for (let adjNode of graph.adjList.get(node1)) {
		if (adjNode === node2) {
			// If in this initialization, the neighbors of node1 contain node2, we know there is a path between the 2 nodes.
			return true;
		} else {
			// Add the neighbor nodes to the queue.
			nodesQueue.push(adjNode);
		}
	}

 	while (nodesQueue.peek() !== null) {
		// Process the next node in the queue.
		const currentNode = nodesQueue.pop();

		for (let adjNode of graph.adjList.get(currentNode)) {
			if (adjNode === node2) {
				// If in this iteration, the neighbors of node1 contain node2, we know there is a path between the 2 nodes.  Do not bother waiting to process the queue until getting to this node, once we identify it is a neighbor of a connected node, return true.
				return true;
			} else {
				// Add the neighbor nodes to the queue.
				nodesQueue.push(adjNode);
			}
		}
	}

	return false;
};

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
		if (this.elements.head === null) return null;

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

// Create a graph class.
class DirectedGraph { 
	// Define vertex array and adjacent list. 
	constructor(numVertices) { 
		this.numVertices = numVertices; 
		this.adjList = new Map(); 
	} 

	// Add vertex to the graph.
	addVertex(vertex) { 
		// Add vertex as key to adjList.
		// Initialize the adjacent list with a null array.
		this.adjList.set(vertex, []); 
	}
	
	// Add an edge to the graph.
	addEdge(vertex1, vertex2) { 
		// Get the list for vertex1 and put the vertex2denoting edge between v and w.
		this.adjList.get(vertex1).push(vertex2); 
	
		// Since graph is directed, we don't need to add an edge from vertex2 to vertex1 too.
		// this.adjList.get(vertex2).push(vertex1); 
	} 

	// Print the vertex and adjacency list. 
	printGraph() { 
		// Get all the vertices.
		const getKeys = this.adjList.keys(); 

		// Iterate over the vertices.
		for (const key of getKeys) { 
			// Get the corresponding adjacency list for the vertex.
			const getValues = this.adjList.get(key); 
			let conc = ""; 

			// Iterate over the adjacency list 
			for (const value of getValues) {
				// Concatenate the values into a string 
				conc += value + " "; 
			}

			// Print the vertex and its adjacency list.
			console.log(key + " -> " + conc); 
		} 
	} 
} 

// Use the above implemented graph class.
const graph1 = new DirectedGraph(6); 
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; // The root is 'A'.
  
// Add vertices.
for (let i = 0; i < vertices.length; i++) { 
	graph1.addVertex(vertices[i]); 
} 
  
// Add edges. 
graph1.addEdge('A', 'B'); 
graph1.addEdge('A', 'D'); 
graph1.addEdge('A', 'E'); 
graph1.addEdge('B', 'C'); 
graph1.addEdge('D', 'E'); 
graph1.addEdge('E', 'F'); 
graph1.addEdge('E', 'C'); 
graph1.addEdge('C', 'F'); 
  
// Print all vertices and each of their corresponding adjacency lists.
// Expect:  
// A -> B D E 
// B -> C 
// C -> F 
// D -> E 
// E -> F C 
// F ->  
graph1.printGraph(); 

console.log(routeBetweenNodes(graph1, 'A', 'C')); // Expect: true.
console.log(routeBetweenNodes(graph1, 'A', 'F')); // Expect: true.
console.log(routeBetweenNodes(graph1, 'E', 'C')); // Expect: true.
console.log(routeBetweenNodes(graph1, 'D', 'B')); // Expect: false.
console.log(routeBetweenNodes(graph1, 'F', 'A')); // Expect: false.