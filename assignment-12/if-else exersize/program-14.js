// 14. Write a js program to input angles of a triangle
// and check whether triangle is valid or not.

var angle1 = 50;
var angle2 = 100;
var angle3 = 30;
if (angle1 && angle2 && angle3 >  0) {
    if (angle1 + angle2 + angle3 == 180) {
        console.log("Its a Triangle");
    } else {
        console.log("Its not a Triangle");
    }
}else {
    console.log("Every angle should be greater than zero.");
}