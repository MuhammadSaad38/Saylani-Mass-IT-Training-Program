// 16. Write a js program to check whether the triangle is
//  equilateral, isosceles or scalene triangle.
var side1 = 22;
var side2 = 21;
var side3 = 20;
if (side1 == side2 && side2 == side3 && side3 == side1) {
    console.log("It's a equilateral triangle.");
}else if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log("It's a Isosceles triangle.");
}else if (side1 != side2 && side2 != side3 && side1 != side3) {
    console.log("It's a scalene triangle.");
}else{
    console.log("Side should be greater than Zero.");
}
