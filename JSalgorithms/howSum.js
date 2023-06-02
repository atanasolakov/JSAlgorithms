const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers ) {
        const reminder = targetSum - num;
        const reminderResult = howSum(reminder, numbers);
        if( reminderResult !== null) {
            return [...reminderResult, num];
        }
    }
    return null
}

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return []
    if(targetSum < 0) return null;

    for (let num of numbers) {
        const reminder = targetSum - num ;
        const reminderResult = howSum(reminder,numbers, memo);
        if(reminderResult !== null) {
            return [...reminderResult, num];
            return  memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}