// // 3. Write a js program to find maximum and minimum between two numbers using functions.
 
// function max_min(num1,num2){
//     if(num1>num2){
//        console.log("num1: " + num1 + " is maximum" );
//        console.log("num2: " + num2 + " is minimum");
//     }
//     else if(num1<num2){
//         console.log("num2: " + num2 + " is maximum" );
//         console.log("num1: " + num1 + " is minimum");
//     }
//     else{
//         console.log("Both numbers are equal");
//     }
// }
// max_min(3,6)


//#-----------------------------Self Doing--------------------------------------------
// // 3. Write a js program to find maximum and minimum between two numbers using functions.

function findMaxNumAndMinNum(number1,number2) {
    if (number1>number2){
        return `Number1 is Maximum: ${number1}.\nNumber2 is Minimum: ${number2}.`;
    }else if (number2>number1){
        return `Number2 is Maximum: ${number2}.\nNumber1 is Minimum: ${number1}.`;
    }else{
        return "Number should be different."
    }
}

var number1 = 10;
var number2 = 10;
var maxAndMin = findMaxNumAndMinNum(number1,number2);
console.log(maxAndMin);















