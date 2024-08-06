// 12. Write a js program to print
//  all unique elements in the array.

// function uniqueElementsInAnArray(array)
// {
//     for (let i = 0; i < array.length; i++)
//     {
//         for (let j = i+1; j < array.length; j++)
//         {
//             if(array[i]==array[j])
//             {
//                 array.splice(j,1)
//                 j--;
//             }   
//         }
//     }
//     return array;
// }
// var arr = ["Student1","Student2","Student2","Student1","Student3","Student2","Student1","Student3","Student4"];
// var uniqueArr = uniqueElementsInAnArray(arr);
// uniqueArr.forEach((value) => {
//     console.log(value);
// })



function uniqueElementsInAnArray(array) {
    var uniqueArr = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        var count = 0 ;
        for (var j = i + 1; j < array.length; j++) {
            if (value == array[j]) {
                count++;
                array.splice(j, 1); 
                j--;
            }
        }  
        if(count<1){
          uniqueArr.push(value);
        }
    }
    return uniqueArr ;
}

var array = [1,2,2,1,4,3,5,5];
var returnArr = uniqueElementsInAnArray(array);
console.log(returnArr);

