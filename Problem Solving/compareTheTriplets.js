function compareTriplets(a, b) {
    let aResult = 0;
    let bResult = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aResult++;
        } else if (a[i] < b[i]) {
            bResult++;
        }
    }

    return [aResult, bResult];
}