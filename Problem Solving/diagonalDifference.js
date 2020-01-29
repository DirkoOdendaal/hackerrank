function diagonalDifference(arr) {
    // Write your code here
    let arrayLength = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    for( let i = 0; i < arrayLength; i++) {
        for ( let j = 0; j < arrayLength; j++) {
            //main diagonal
            if ( i === j ) {
                diag1 += arr[i][j];
            }
            //second diagonal
            if ( i + j === arrayLength - 1 ) {
                diag2 += arr[i][j];
            }

        }
    }

    return Math.abs(diag1 - diag2);
}