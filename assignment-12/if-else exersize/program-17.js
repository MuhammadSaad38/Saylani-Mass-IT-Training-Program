// 17. Write a js program to find 
// all roots of a quadratic equation.

var a  = 2;
var b  = 2;
var c  = 2;

var takeDiscriminante = b**2 - 4*a*c;
if (takeDiscriminante  >=0) {
    var firstRoot =  (-b + Math.sqrt(takeDiscriminante))  / (2*a);
    var secondRoot =  (-b - Math.sqrt(takeDiscriminante))  / (2*a);
    console.log({firstRoot,secondRoot});
}else{
    console.log("Discriminante should be equal and greater than 0.");
}