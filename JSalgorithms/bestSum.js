const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null ;
    let shortestCombination = null;

    for(let num in numbers) {
        const reminder = targetSum - num ;
        const reminderCombination = bestSum(reminder, numbers);
        if(reminderCombination !== null) {
            const combination = [...reminderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

const bestSumMemo = (targetSum , numbers , memo = {} ) => {
    if(targetSum in memo ) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    let shortestCombination = null ;

    for (let num of numbers) {
        const reminder = targetSum - num ;
        const reminderCombination = bestSumMemo(reminder, numbers, memo);
        if(reminderCombination !== null) {
            const combination = [...reminderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return  shortestCombination;
}