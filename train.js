
//F task

function findDoubler (a) {
    const aSplit = a.split("");
    let result = aSplit.map((ele, i, arr) => {

         if (arr[i] == arr[i+1] ) {
            return true 
        } else {
           return false
        }
    })
 
    return result.includes(true) 
  
}

const tekshir = findDoubler('helola');
console.log(tekshir);