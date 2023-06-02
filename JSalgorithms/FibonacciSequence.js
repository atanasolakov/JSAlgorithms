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

// Fib memoization

const fibMemoization = (n, memo= {}) => {
    if( n in memo) return  memo [n];
    if(n <= 2) return 1;

    memo[n] = fibMemoization(n-1, memo) + fibMemoization(n-2, memo);
    return memo[n]
}

const fibMemo = (n, prevValues= []) => {
    if(prevValues[n] != null) {
        return prevValues[n];
    }
    let result;
    if(n <= 2) {
        result = 1;
    } else  {
      result =  fibMemo(n-1, prevValues) + fibMemo(n-2,prevValues);
    }
    prevValues[n] = result ;
    return result;
}

const fibMemoMe = (n, memo = []) => {
    if(n in memo) return memo[n];
    let result = 0;
    if (n <= 2) return 1;

    result = fibMemoMe(n-1) + fibMemoMe(n-2);
    memo[n] = result;
    return result;
}
