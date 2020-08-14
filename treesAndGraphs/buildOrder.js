// 4.7 Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the first project is dependent on the second project).  All of a project's dependencies must be built before the project is.  Find a build order that will allow the projects to be built.  If there is no valid build order, return an error.

const buildOrder = (directedGraph) => {
	const order = [];

	console.log(`values: ${directedGraph.adjList.values()}`);
	const keys = directedGraph.adjList.keys();

	for (const key of keys) {
		// if (!directedGraph.adjList.values().includes(key)) {
		// 	order.push(key);
		// }
		console.log(`${key}: ${order}`);
	}
};

// Create a directed graph class.
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
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// Add vertices.
for (let i = 0; i < vertices.length; i++) { 
	graph1.addVertex(vertices[i]); 
} 
  
// Add edges. 
graph1.addEdge('A', 'D'); 
graph1.addEdge('F', 'B'); 
graph1.addEdge('B', 'D'); 
graph1.addEdge('F', 'A'); 
graph1.addEdge('D', 'C'); 
  
// Print all vertices and each of their corresponding adjacency lists.
// Expect:  
// A -> D 
// B -> D
// C ->  
// D -> C
// E ->
// F -> B A
graph1.printGraph(); 

console.log(buildOrder(graph1)); // Expect: F, E, A, B, D, C