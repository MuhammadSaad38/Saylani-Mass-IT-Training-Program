// 8. Write a js program to input any alphabet and check whether it
//  is vowel or consonant.

var char = "io";
if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
    console.log(char,"is a vowel.")    
}else if (char>=0){
    console.log(char,"is a number. Please enter alphabet.")
}else{
    console.log(char,"is a constant.")
}