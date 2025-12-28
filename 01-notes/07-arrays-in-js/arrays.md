1. Creating ArraysThere -
are two primary ways to create an array:-
Array Literal (Recommended): The most common and simple way.JavaScriptconst fruits = ['Apple', 'Banana', 'Mango'];
Array Constructor: Using the new keyword.JavaScriptconst numbers = new Array(1, 2, 3);

2. Accessing and Modifying Elements-
Arrays are zero-indexed, meaning the first element is at index 0.
Accessing: fruits[0] returns "Apple"
.Modifying: fruits[1] = 'Blueberry' changes "Banana" to "Blueberry"
.Length: The .length property returns the total number of elements.3. 
Common Array MethodsJavaScript provides a rich set of built-in methods to manipulate data.Adding/Removing Elements
MethodDescriptionpush()Adds an element to the end of the array.pop()Removes the last element from the array.unshift()Adds an element to the beginning.shift()Removes the first element.splice()Adds or removes elements at a specific index.Iterating Over ArraysforEach(): Executes a function for each array element.map(): Creates a new array by performing a function on every element.filter(): Creates a new array with elements that pass a specific test.reduce(): Reduces the array to a single value (e.g., summing numbers).4. Searching and SortingindexOf(): Returns the first index at which a given element can be found.includes(): Checks if an array contains a certain value (returns true or false).find(): Returns the value of the first element that satisfies a condition.sort(): Sorts elements alphabetically (Note: numeric sorting requires a compare function).5. Multidimensional ArraysYou can create "arrays within arrays," often used to represent grids or tables.JavaScriptconst matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][1]); // Returns 2
6. Advanced ConceptsSpread Operator (...)Used to copy arrays or combine them easily.JavaScriptconst combined = [...fruits, ...numbers];
DestructuringA way to extract values into distinct variables.JavaScriptconst [first, second] = fruits;
// first = 'Apple', second = 'Blueberry'
Summary TableConceptDescriptionIndexingStarts at 0.MutabilityArrays can be changed after creation.Data TypesCan be "heterogeneous" (mixed types).MemoryDynamically resized; no need to define size upfront.Would you like me to create a practical code challenge to help you practice these array methods?


Method,Description
push(),Adds an element to the end of the array.
pop(),Removes the last element from the array.
unshift(),Adds an element to the beginning.
shift(),Removes the first element.
splice(),Adds or removes elements at a specific index.