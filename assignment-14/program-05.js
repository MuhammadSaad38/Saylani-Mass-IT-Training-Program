// 5. Write a js program to find second largest element in an array.
var  array = [10, 5, 8, 12, 15, 6, 20];
var largest = array[0];
var secondLargest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
for (let i = 1; i < array.length; i++) {
    if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
}
console.log(`Second Largest Number of Array is: ${secondLargest}`);
