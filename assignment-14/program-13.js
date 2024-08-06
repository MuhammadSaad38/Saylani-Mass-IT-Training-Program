// // // 13. Write a js program to count total number of duplicate
// // // elements in an array.

function countDuplicatesinAnArray(array) {
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        var count = 0;
        for (var j = i + 1; j < array.length; j++) {
            if (value == array[j]) {
                count++;
                array.splice(j, 1); 
            }
        }
        if (count >= 1) {
            console.log(`${value} Duplicates ${count} Times.`);
        }
    }
}

var array = ["Student1", "Student2", "Student2", "Student1", "Student3", "Student2", "Student1", "Student3", "Student4"];
countDuplicatesinAnArray(array);



// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var countDuplicates = function(nums) {
//     for (var i = 0; i < nums.length; i++) {
//         var value = nums[i];
//         var count = 0;
//         for (var j = i + 1; j < nums.length; j++) {
//             if (value == nums[j]) {
//                 count++;
//             }
//         }
//     }
// };
// var nums = [1,2,3,4,2,1,5,5,6]
// console.log(countDuplicates(nums));


// var findDuplicates = function(nums) {
//     const duplicates = [];

//     for (const currentNum of nums) {
//         // Get the index that currentNum points to:
//         // Note: we have to use Math.abs because the currentNum
//         // could have been flipped:
//         const otherIndex = Math.abs(currentNum) - 1;

//         // If the number at otherIndex > 0 (hasn't been flipped):
//         if (nums[otherIndex] > 0) {
//             // Flip it to negative to mark that we've visited it:
//             nums[otherIndex] = nums[otherIndex] * (-1);
//         }
//         // If the number at otherIndex < 0 (has been flipped):
//         else {
//             // We know that we've visited this currentNum before because
//             // it leads us to the same number.
//             duplicates.push(Math.abs(currentNum));
//         }
//     }
//     return duplicates;
// };
// var nums = [1,2,3,4,2,1,5,5,6]
// var a = findDuplicates(nums)
// console.log(a);