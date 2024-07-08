// Understanding pending

let arr = [1, 2, 3, 4, 5];

if (arr.length < 2) {
    // Handle the case where there are less than 2 elements in the array.
    console.log("Array needs to have at least two elements");
} else {
    let max, secondMax;

    // Initialize max and secondMax with the first two elements
    if (arr[0] > arr[1]) {
        max = arr[0];
        secondMax = arr[1];
    } else {
        max = arr[1];
        secondMax = arr[0];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    console.log(secondMax);
}
