// function

// function greeting() {
//     console.log("Strike is coming soon");
// }

// greeting();

// function addNumber(num1, num2, num3 = 0, num4 = 0) {
//   return num1 + num2 + num3 + num4;
// }

// function addNumber(...num) {
//     let sum = 0;
//     for (let i of num)
//         sum += i;
//     console.log(sum);
// }

// addNumber(2, 3, 4, 5, 6, 7);

// const arr = [10, 20, 30, 40];
// const [first, second,...num] = arr;
// console.log(first, second, num);

// const arr = [10, 20, 30, 40];
// const arr2 = [...arr];

// console.log(arr2);

// function addNumber(...num) {
//     let sum = 0;
//     for (let i of num)
//         sum += i;
//     return sum;
// }

// console.log(addNumber(1, 2));

// const addNumber = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNumber(2,3));

// arrow function

// const addNumber = ()=> {
//     console.log("Hello");
// }

// console.log(addNumber());

// const addNumber = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addNumber(1, 2));

// const addNumber = (num1, num2) => num1 + num2;

// const squareNumber = (num) => num * num;

// console.log(squareNumber(6));

// const greeting = () => {
//     return user = {
//         name: "Asif",
//         age: 20,
//     };
// }

// const greeting = () => ({ name: "Asif", age: 20 });

// console.log(greeting());

// IIFE

// (function greeting() {
//   console.log("Hello");
// })();

// (() => {
//   console.log("hello");
// })();

// function greet() {
//     console.log("Hello");
// }
// function dance() {
//   console.log("I am dancing");
// }

// function meet(callback) {
//     console.log("I am goin to meet someone");
//     callback();
//     console.log("I have finsihed metign");
// }

// meet(greet);
// meet(dance);

function zomatoOrderPlaced() {
    console.log("We have started preparing food - Zomato")
}

function blinkitOrderPlaced() {
  console.log("We have started preparing food - Blinkit");
}

function payment(amount,callback) {
  console.log(`${amount} payment has initialized`);
    console.log(`Payment is received`);
    callback();

    // GST
    // Rider
    // company
}

payment(500, zomatoOrderPlaced);

payment(500, blinkitOrderPlaced);
