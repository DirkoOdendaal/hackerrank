function plusMinus(arr) {

    const arrayLength = arr.length;

    let plusCount = 0;
    let minusCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] > 0) {
            plusCount++;
        } else if (arr[i] < 0) {
            minusCount++;
        } else {
            zeroCount++;
        }
    }

    console.log(plusCount / arrayLength);
    console.log(minusCount / arrayLength);
    console.log(zeroCount / arrayLength);

}