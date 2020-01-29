function staircase(n) {
    let space, hash, staircase;

    for (var i = 0; i < n; i++) {
        space = n - 1 - i;
        hash = i + 1;
        staircase = ' '.repeat(space) + '#'.repeat(hash);
        console.log(staircase);
    }

}