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

function createBankAccount(initialBalance) {
  let balance = initialBalance; // PRIVATE - can't be accessed directly

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },

    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },

    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance()); // 100
myAccount.deposit(50); // 150
myAccount.withdraw(30); // 120

// Can't directly access or modify balance!
console.log(myAccount.balance); // undefined
myAccount.balance = 9999999; // Doesn't work!
console.log(myAccount.getBalance()); // 120 - still protected

// higher order functions
function double(value) {
  return function execute(num) {
    return num * value;
  };
}

const n = double(20)(5);
console.log(n);
