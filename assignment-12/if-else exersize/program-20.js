// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

var basicSalary = 100;
if (basicSalary<=10000) {
    var HRA = 0.20 * basicSalary;
    var DA = 0.80 * basicSalary;
}else if (basicSalary<=20000) {
    var HRA = 0.25 * basicSalary;
    var DA = 0.90 * basicSalary;
}else{
    var HRA = 0.30 * basicSalary;
    var DA = 0.95 * basicSalary;
}
var grossSalary = basicSalary + HRA + DA
console.log(`The gross salary of an employee is ${grossSalary} HRA ${HRA} DA ${DA} and basic salary ${basicSalary}.`);
