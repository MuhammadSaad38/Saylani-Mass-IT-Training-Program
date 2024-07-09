// 13. Write a js program to count total number of notes in given amount.
var amount = 1300;
if (amount>=1000) {
    var note1000 =Math.floor(amount/1000); 
    amount = amount%1000; 
    console.log(note1000,"notes of 1000");
} 
if (amount>=500) {
    var note500 =Math.floor(amount/500); 
    amount = amount%500;
    console.log(note500,"notes of 500");
} 
if (amount>=100) {
    var note100 =Math.floor(amount/100); 
    amount = amount%100; 
    console.log(note100,"notes of 100");
}