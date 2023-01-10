
function findBig(arr) {
    let big = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]>big) {
            big = arr[i]
        }
    }
    return arr.indexOf(big);
}
const javob = findBig([0, 5, 11, 43, 292, 4, 6,]);
console.log(javob)