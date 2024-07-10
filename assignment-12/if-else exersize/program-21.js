// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

var units = 1000;
if(units<=50){
    var bill = units*0.50 
}else if(units<=150){
    var bill = (50*0.50) + ((units-50)*0.75);
}else if(units<=300){
    var bill = (50*0.50) + (100*0.75) + ((units-150)*1.20);
}else{
    var bill = (50*0.50) + (100*0.75) + (150*1.20) + ((units-300)*1.50);
}
console.log(`These ${units} units consume ${bill} bill.`);