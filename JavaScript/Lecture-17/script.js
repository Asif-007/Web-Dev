// console.log('First');
// let sum = 0;
// for (let i = 0; i < 30000000000000; i++)
//     sum += i;
// console.log(sum);
// console.log('Last');

// Js is a single threaded programming language which means only one task will run at one time no multi tasking

// console.log('Hello Ji');
// setTimeout(() => {
//     console.log('Time out Exceeded');
// }, 5000);

// console.log("I am at end");

// let arr = [100, 20, 90, 70];
// arr.push(10);
// arr.map((x) => x * 2);

// function hello() {
//   console.log(hello);
// }

// hello();

console.log("Start Operation");
fetch("https://api.github.com/users").then(() => {
  console.log("Github user info");
});

console.log("end of operation");
