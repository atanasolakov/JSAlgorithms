const chunkArray = (arr, sizeArray) => {
    let chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + sizeArray))
        index += sizeArray
    }

    return chunkedArray
}
console.log(chunkArray(['a', 'b', 'c', 'v', 'g', 'z'], 2));