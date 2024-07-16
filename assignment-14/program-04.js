// 4. Write a js program to find maximum and minimum element in an array.
var array = [8,53,12,10,56,3,19];
var maxElement = array[0];
var minElement = array[0];
for (let i = 1; i < array.length; i++) {
    if (maxElement  < array[i]) {
        maxElement = array[i];
    }
    if (minElement  > array[i]) {
        minElement = array[i];
    }
}
console.log(`Maximum Element: ${maxElement}\nMinimum Element: ${minElement} `)