// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var markesPhysics = 0;
var markesChemistry = 0;
var markesBiology = 500;
var markesMathametics = 0;
var markesComputer = 40;
var obtainingMarks = markesPhysics + markesChemistry + markesBiology + markesMathametics + markesComputer
var totalSubjectMarks = 500;
if (obtainingMarks<=totalSubjectMarks){
    var myPercentage = (obtainingMarks/totalSubjectMarks)*100
    if (myPercentage>=90) {
        console.log("Grade A");
    }else if (myPercentage>=80) {
        console.log("Grade B");
    }else if (myPercentage>=70) {
        console.log("Grade C");
    }else if (myPercentage>=60) {
        console.log("Grade D");
    }else if (myPercentage>=40) {
        console.log("Grade E");
    }else{
        console.log("Grade F");
    }
} else{
    console.log("Obtaining Markes should be less than Total Marks");
}









