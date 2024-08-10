// 16. Write a js program to find reverse of an array.

let arr1 = [1,2,3,4,5];
let arr2 = [];
for (let i = 0; i < arr1.length ; i++) {
    arr2[i] = arr1[arr1.length-1-i] // minus i is bcs of i want previous element of an total length
}
console.log(arr2);