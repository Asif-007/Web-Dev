// // console.log(a);

// var a = 10;
// var b = 20;
// // console.log(a);
// var sumResult1 = addNumber(a, b);
// console.log(sumResult1);

// function addNumber(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }

// var sumResult2 = addNumber(4, 5);
// // console.log(sumResult1, sumResult2);






// let const
// Memory Allocation
// a = <uninitialized> (TDZ)

// console.log(n);

// let a = 10;
// const n = 20;




// TDZ addNumber as it a const
let a = 20;
const b = 10;
const addNumber = function (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result = addNumber(a, b);
console.log(result);