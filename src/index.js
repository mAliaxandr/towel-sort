
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }

    let newMatrix = matrix.map((item, index) => {
        if (index%2 > 0 && Array.isArray(item)) {
            console.log('item -- ', item);
            return item.reverse();
            // console.log('index - ', index, item);
        }
        return item;
    })
    console.log('matrix - ', matrix , newMatrix);
    let newArr = matrix.reduce((acc, item) => {
        
        
        return acc.concat(Array.isArray(item) ? towelSort(item) : item);
     }, []);
    //  console.log('result - ', newArr);
     return newArr;
}
