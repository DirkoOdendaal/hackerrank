function aVeryBigSum(ar) {
    return ar.reduce((total, item) => {
        return total + item;
    }, 0);
}