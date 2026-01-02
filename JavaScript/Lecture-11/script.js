// Scope and closure , HOF

// Global accessible to everyone

// Fucntional -> accessible to that  function

// Block -> accesssible to  that block

// let a = 10;
// const b = 20;
// if (true) {
//   console.log(b);
// }

// function greet() {
//     console.log(a);
// }

// greet();

// function greet() {
//   const c = 30;
// }

// console.log(c);
// console.log(e);

// let global = 30;

// function greet() {
//     let global = 40;
//     if (true) {
//         let global = 50;
//         console.log(global);
//     }
// }

// greet();

// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         return count;
//   }
//   return increment;
// }

// const counter = createCounter();
// console.log(count);
// console.log(counter());

let user = {
  balance: 500,
  deposit: function (amount) {
    if (typeof amount == "number" && amount > 0) {
      this.balance += amount;
      return this.balance;
    }
  },
};

user.deposit(200);

// higher order functions
function double(value) {
  return function execute(num) {
    return num * value;
  };
}

const n = double(20)(5);
console.log(n);
