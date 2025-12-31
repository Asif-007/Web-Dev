// Object

// console.log(user["email"]);
// console.log(user);

// console.log(user);

// console.log(user.age);

// CRUD Operations

// update
// user.aadhhar = 353797034101;

// user.age = 21;
// console.log(user);

// delete user.email;
// console.log(user);

// const user2 = user;
// user2.age = 30;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let num in user) {
//     console.log(num, user[num]);
// }

// const name = user.name;
// const age = user.age;
// console.log(name, age);

// Object destructuing
// const { name: userName, age:userAge } = user;
// console.log(userName, userAge);

// const arr = [10, 20, 30, 40];
// const [first, second] = arr;
// console.log(first, second);
// console.log(one, two);

// for (let keys of Object.values(user)) {
//     console.log(keys);
// }

// for (let [keys, values] of Object.entries(user)) {
//     console.log(keys, values);
// }

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }

// const user = {
//   name: "Asif",
//   age: 20,
//   email: "asifali@7.com",
//   amount: 3400,
//   greeting: function () {
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//   },
// };

// user.greeting();

// const va = user.greeting();

// console.log(va);

// const user2 = {
//     name: "mohit",
//     age: 25
// };

// user2.greeting = user.greeting;
// console.log(user2.greeting());

// const user = {
//   name: "Asif",
//   age: 20,
//   email: "asifali@7.com",
//   amount: 3400,
//   address: {
//     city: "hyd",
//     state: "tg",
//   },
// };

// console.log(user);

// shallow copy
// const user2 = {...user};
// console.log(user);

// deep copy
// const user2 = structuredClone(user);
// user2.address.city = 'sec'
// console.log(user2);
// ?Keys String || Symbol

// const arr = [10, 20, 30];
// console.log(arr[0]);

const sym = Symbol("id");
const user = {
  name: "Asif",
  age: 20,
  0: 100,
  2: "Mohan",
  [sym]: "Hello",
};

console.log(user[sym]);
