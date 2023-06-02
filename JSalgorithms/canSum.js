const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const reminder = targetSum - num;
        if (canSum(reminder, numbers) === true) {
            return true
        }
    }
    return false;
}

const canSumMemo = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if( targetSum  === 0) return true;
    if(targetSum < 0) return false;

    for (let num of numbers) {
        const reminder = targetSum - num;
        if(canSumMemo(reminder,numbers,memo) === true) {
            memo[targetSum] = true;
            return true
        }
    }
    memo[targetSum] = false;
    return false;
}