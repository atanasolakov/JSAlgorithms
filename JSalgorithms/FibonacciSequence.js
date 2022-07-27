function fibonacci(n) {
    let arr = [0,1];
    for(let i = 2; i<n; i++){
        arr.push(arr[i-1] = arr[i-2]);{
            return [n-1];
        }
    }
}

function fibonacci1(n){
    if(n<3){
        return n-1
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
