// 18. Write a js program to calculate profit or loss.
var myCost = 1200;
var mySale = 15;
if (mySale>myCost && mySale>0 && myCost >0) {
    var myProfit = mySale-myCost
    console.log("You are in Profit of",myProfit);
}else if (myCost>mySale && mySale>0 && myCost >0) {
    var myLose = myCost-mySale
    console.log("You are in Lose of",myLose);
}else{
    console.log("Sale or Cost should be greater than Zero.");
}