// 7. Write a js program to find sum 
// of all odd numbers between 1 to n.

var i =  1;
var  n = 10;
var sum  = 0;
while (n>=i) {
    if (i%2!=0) {
        sum = sum+i;
    }
    i++;
}
console.log(sum)