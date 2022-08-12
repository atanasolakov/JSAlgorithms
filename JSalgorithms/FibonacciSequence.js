function fibonacciIterative(n) {
    let arr = [0,1];
    for (let i = 2; i<n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n-1];
}
function fibonacciIterativeArray(n) {
    let arr = [0,1];
    for (let i = 2; i<n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

function fibonacciRecursive(n){
    if (n<3) {
        return n-1;
    } else {
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
}
