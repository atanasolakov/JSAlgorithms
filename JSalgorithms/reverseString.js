const reverseString = (str) => {
    return str.split('').reverse().join('');

}

const reverseStringFor = (str) => {
    let newStr = ''
    for( let i = str.length-1; i === 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function reverseStringRecursive(str) {
    if (str === "")
        return "";
    else
        return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}