function sockMerchant(n, ar) {
    ar.sort();

    let sockPairs = 0;

    for(let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            sockPairs += 1;
            i++;
        }
    }

    return sockPairs;
}