// 2. Print All Negative Elements in an Array

let arr = [1, -2, 3, -4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}
