// 3. Write a js program to find sum of all array elements.
var array = [22,13,44,10];
var sumOfArrayElements = 0;
for (let i = 0; i < array.length; i++) {
    sumOfArrayElements+=array[i];
}
console.log(`The sum of elements of array are: ${sumOfArrayElements}.`);