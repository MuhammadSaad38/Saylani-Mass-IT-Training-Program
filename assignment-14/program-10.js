// 10. Write a js program to delete an element from
// an array at specified position
var array = [10,20,30,40,70,80]; // Initialize the array
var deleteIndex = 2; // Index of the element to be deleted

// Shift elements to the left starting from deleteIndex
for (let i = deleteIndex; i < array.length - 1; i++) {
    array[i] = array[i+1]; // Replace current element with the next element
    // array.length - 1 ensures the loop runs up to the second last element
    // to prevent accessing out-of-bounds element.
}

array.length = array.length - 1; // Decrease the array length by 1 to remove the last duplicate element
console.log(array); // Output the modified array



// FOR UNDERSTANDING VISIT BELOW LINK
// https://www.youtube.com/watch?v=w1nfy2tGP9M