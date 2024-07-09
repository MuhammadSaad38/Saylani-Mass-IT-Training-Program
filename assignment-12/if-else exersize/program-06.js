// 6. Write a js program to check whether a year is leap year or not.

var checkLeepYear = 3200;
if (checkLeepYear % 4 ==0 && checkLeepYear % 100 !=0 || checkLeepYear%400 == 0 ){
    console.log(checkLeepYear,"is a leep year");
}else{
    console.log(checkLeepYear,"is not a leep year");
}
