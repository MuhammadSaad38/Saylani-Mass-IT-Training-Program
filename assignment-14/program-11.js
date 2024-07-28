// 11. Write a js program to count frequency of each
//  element in an array.
function frequencyOfEachElementinAnArray(array){
    for (var i = 0; i < array.length; i++) {
        var value  =   array[i] ;
        var count = 1 ;
        for (var j = i+1; j < array.length; j++) {
            if(value==array[j]){
                count++;
                array.splice(j,1);
                j--;
           }      
    }
    console.log(value,count); 
}
}

var array = ["Student1","Student2","Student2","Student1","Student3","Student2","Student1","Student3","Student4"];
frequencyOfEachElementinAnArray(array);


















// Reverse an array a sample program
// let arr1 = [1,2,3,4,5];
// let arr2 = [];
// for (let i = 0; i < arr1.length ; i++) {
//     arr2[i] = arr1[arr1.length-1-i] // minus i is bcs of i want previous element of an total length
// }
// console.log(arr2);