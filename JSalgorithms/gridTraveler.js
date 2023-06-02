const gridTraveler = (m,n) => {
    if(m===0 || n === 0) return 0;
    if(m=== 1 && n ===1) return 1;

    return gridTraveler(m-1,n) + gridTraveler(m, n-1);
}

const gridTravelerMemo = (m, n, memo={}) => {
    const key = m + ',' + n;
    if(m === 0 || n === 0) return 0;
    if(m === 1  && n === 1) return 1;

    memo[key] = gridTraveler(m-1,n) + gridTraveler(m, n-1);
    if(key in memo) return memo[key];
}


const gridTravelerMemoMe = (m,n, memo= []) => {
    const key = m + ',' + n;
    if(m === 0 || n === 0) return 0
    if(m === 1 && n === 1) return 0

    memo[key]=gridTraveler(m-1, n) + gridTraveler(m, n-1);
    if(memo[key] !== undefined) return memo[key]
}
