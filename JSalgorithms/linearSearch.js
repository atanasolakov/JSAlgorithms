function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


function indexLinearSearch( arr, target) {
    for(let el in arr) {
        if(el === target) {
            return arr.indexOf(el)
        }
    }
    return -1;
}


