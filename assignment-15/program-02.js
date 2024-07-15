// 2. Write a js program to print all negative elements in an array.
var array = [32,65,-99,-38,40,56,-11];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        console.log(array[i]);
    }
}