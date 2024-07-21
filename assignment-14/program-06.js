// // 6. Write a js program to count total number of
// //  even and odd elements in an array.
// var arrayOfNumbers = [12,77,89,77,55,66,44,33];
// var evenNumbers = [];
// var oddNumbers = [];
// function checkEvenOddNumber(arrayOfNumbers){
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         if (arrayOfNumbers[i]%2 == 0) {
//             var evenCount  = evenNumbers.push(arrayOfNumbers[i]);
//         }else{
//             var oddCount = oddNumbers.push(arrayOfNumbers[i]);
//         }
//     }
//     return {evenCount,oddCount}
// }
// var finalResult = checkEvenOddNumber(arrayOfNumbers);
// console.log(finalResult);




// Do my Self

// 6. Write a js program to count total number of
//  even and odd elements in an array.
var array = [15,55,44,12,6,11]
var evenCount = 0
var oddCount = 0
for (let i = 0; i < array.length; i++) {
    if (array[i]%2==0) {
        evenCount++
    }else{
        oddCount++
    }
}
var result = `Even Count: ${evenCount}\nOdd Count: ${oddCount}`;
console.log(result);







