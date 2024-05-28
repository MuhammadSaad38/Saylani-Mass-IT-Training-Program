// 3. Write a js program to find maximum and minimum between two numbers using functions.
 
function max_min(num1,num2){
    if(num1>num2){
       console.log("num1: " + num1 + " is maximum" );
       console.log("num2: " + num2 + " is minimum");
    }
    else if(num1<num2){
        console.log("num2: " + num2 + " is maximum" );
        console.log("num1: " + num1 + " is minimum");
    }
    else{
        console.log("Both numbers are equal");
    }
}
max_min(3,6)