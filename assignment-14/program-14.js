// 14. Write a js program to delete all duplicate elements from an array.
function dltDuplicates(array){
 for (let i = 0; i < array.length; i++) {
     for (let j = i+1; j < array.length; j++) {
        if(array[i] ==array[j])
        {
          array.splice(j,1)
          j--;
        }
        
     }
 }
 return array ;
}




var array = [243,243,234,766,2,4,2,4,2,1,3]
var returnResult = dltDuplicates(array);
console.log(returnResult);






