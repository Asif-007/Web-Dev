// let marks = [100, 50, 70, 80];
// console.log(marks);

// console.log(marks.length);
// let arr = [30, "Asif", true];
// console.log(arr[0]);

// arr.push(80);
// arr.push("Strike");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(10);
// console.log(arr);

// arr.shift();
// console.log(arr);

// let arr = [10, 30, 50, 90, 11];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let num of arr) {
//   console.log(num);
// }

// let arr2 = arr;
// arr2.push(40);
// console.log(arr);

// const arr = [10, 20, 30, 40];
// arr[2] = 50;
// console.log(arr);

// const arr = [10, 20, 30, 40];
// const arr2 = arr.slice(2, 4);
// console.log(arr2);

// arr.splice(1, 1);
// console.log(arr);

// arr.splice(1, 2, 20, 304);
// console.log(arr);

// const arr = [10, 20, 30, 40];
// const arr2 = ["rohit", 11, true];
// arr.push(arr2);
// const arr3 = arr.concat(arr2);
// const arr3 = [arr, arr2];

// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// const names = ["Alice", "Bob", "Charlie", "Rohit", "Mohit"];
// console.log(names.toString());
// console.log(names.join(' '));
// console.log(names.indexOf("Bob"));

// names.sort();
// names.reverse();
// console.log(names);

// const a = [101, 90, 80, 32, 91];
// a.sort();
// console.log(a);

// const a = [10, 20, 30, 40];
// a.sort((a, b) => b-a);
// // a.reverse();
// console.log(a);

const arr = [10, 40, 50, [40, 90, 11], 80];

const a = arr.flat(Infinity);
console.log(a);
