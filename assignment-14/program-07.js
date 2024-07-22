// 7. Write a js program to count total number of negative elements in an array.
var array = [22,45,-7,5,-77,-56]
var negativeCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]>0) {
        negativeCount++;
    } 
}
console.log(`Negative Elements in an array: ${negativeCount}`);