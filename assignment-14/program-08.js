// 8. Write a js program to copy all elements from an array to another array.
var array = [22,45,7,5,77,56];
var copyArray = [];
for (let i = 0; i < array.length; i++) {
    copyArray.push(array[i]);
}
console.log(copyArray);