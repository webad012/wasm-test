fibonnacci_js = function(n) {
    if (n < 0) {
        console.log("n is negative!: ", n);
        return;
    } else if (n == 0) {
        console.log("zero is not a right argument to fibonnacci()!");
        return;
    } else if (n == 1) {
        return 1;
    }

    let sum = 0;
    let last = 0;
    let curr = 1;
    for(let i=1; i<n; i++) {
        sum = last + curr;
        last = curr;
        curr = sum;
    }
    return sum;
}
