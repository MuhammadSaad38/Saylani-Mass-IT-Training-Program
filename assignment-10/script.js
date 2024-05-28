//20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Input: Basic salary of the employee
let basicSalary = parseFloat(prompt("Enter the basic salary of the employee: "));

let HRA, DA, grossSalary;

// Calculate HRA and DA based on basic salary
if (basicSalary <= 10000) {
    HRA = 0.20 * basicSalary;
    DA = 0.80 * basicSalary;
} else if (basicSalary <= 20000) {
    HRA = 0.25 * basicSalary;
    DA = 0.90 * basicSalary;
} else {
    HRA = 0.30 * basicSalary;
    DA = 0.95 * basicSalary;
}

// Calculate gross salary
grossSalary = basicSalary + HRA + DA;

// Output: Display the gross salary
console.log(`The gross salary of the employee is: ${grossSalary.toFixed(2)}`);
// alert(`The gross salary of the employee is: ${grossSalary.toFixed(2)}`);
