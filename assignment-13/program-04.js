// // 4. Write a js program to check whether a number is even or odd using functions.
// function check_number(number) {
//     if (number%2 == 0) {
//         console.log("Number: " + number + " is even");
//     }
//     else {
//         console.log("Number: " + number + " is odd");
//     }
// }
// check_number(23);

// // Alternative code
// // 4. Write a js program to check whether a number is even or odd using functions.
// function check_number(number1, number2) {
//     if (number1%2 == 0) {
//         console.log("Number1: " + number1 + " is even");
//         console.log("Number2: " + number2 + " is odd");
//     }
//     else {
//         console("Number should be greater than zero ");
//     }
// }
// check_number(22,37);



// #-----------------------Self doing---------------------------------
function findEvenOrOdd(number) {
    if (number%2==0 && number>0){
        return `Number is Even: ${number}.`;
    }else if (number%2!=0 && number>0){
        return `Number is Odd: ${number}.`;
    }else{
        return "Number should be greater than zero."
    }
}


var number = -10;
var evenAndOdd = findEvenOrOdd(number);
console.log(evenAndOdd);




