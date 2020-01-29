function miniMaxSum(arr) {
    let minimumSum = 0;
    let maximumSum = 0;

    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr.length-1 !== i) {
        maximumSum += arr[i];
        }
        if (0 !== i ) {
        minimumSum += arr[i];
        }
    }

    console.log(maximumSum, minimumSum);

}