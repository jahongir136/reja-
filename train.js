
// J - TASK // 

function chack(x) {
    if (x == 0) {
      return 0;
    } else if (x < 0) {
      return -1;
    } else {
      return 1;
    }
  }
  console.log(chack(5));   
  console.log(chack(-5));   
  console.log(chack(0));






// I - Task // 

// let getPositive = ([0, -15, 5, -3, 2, -8, 9, -11]); 
// function positiveNumbers(arr) {
// const positiveNumbers = arr => arr.filter(num => num > 0);
//   return arr.filter(function(num) {
//     return num > 0;
//   });
// }
// console.log(positiveNumbers(getPositive)); 





//   H-Task  //

// function reverseString(a) {
//     return a.split("").reverse().join("")
//   }   
//   console.log(reverseString("Jahogir"));



// console.log("train js ishga tushdi")
// const list = [
    
//     "yaxshi talab bolling", //0-20
//     "togri boshliq tanlang va koproq hato qling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga invistitsa qling", //50-60
//     "endi dam oling foydasi yoq", //60
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         setTimeout(function () {
//             return list[5];
//         }, 5000);
//     }
// } 
// console.log("passed here 0")
// maslahatBering(10, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");

// // ASYNC function 

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new  Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a <= 20 && a <= 30) return list[1];
//     else if (a <= 20 && a <= 40) return list[2];
//     else if (a <= 20 && a <= 50) return list[3];
//     else if (a <= 20 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setImmediate(() => {
//                 resolve(list[5]);
//             }, 5000);
//        });
//     }
// }

// // call via asyn/await

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();



