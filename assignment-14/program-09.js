// 9. Write a js program to insert an element in an array.
function insertInArray(array,element){
    array.push(element);
    console.log(array);
}
var array = [];
insertInArray(array,22);
insertInArray(array,54);
insertInArray(array,4);
insertInArray(array,11);
insertInArray(array,93);

// another-method
// // Original array
// let arr = [1, 2, 3, 4, 5];

// // Element to insert
// let elementToAdd = 1099;

// // Position to insert the element
// let positionToAdd = 0;

// // Create a new array to hold the result
// let newArray = [];

// // Loop through the original array
// for (let i = 0; i <= arr.length; i++) {
//     // If the current index is the insertion position, add the new element
//     if (i === positionToAdd) {
//         newArray.push(elementToAdd);
//     }
//     // Add the current element from the original array
//     if (i < arr.length) {
//         newArray.push(arr[i]);
//     }
// }

// // The new array now contains the element inserted at the specified position
// console.log(newArray); // Output: [1, 2, 99, 3, 4, 5]


















