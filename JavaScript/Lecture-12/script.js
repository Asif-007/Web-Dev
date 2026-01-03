// forEach, filter, reducer, map, set

// let s = 0;

// arr.forEach((number) => {
//     s += number;
// }
// );

// console.log(s);

// filter

// const newArr = arr.filter((number) => number > 25);
// console.log(newArr);

// Array.prototype.filtering = function (compare) {
//   const ans = [];
//   for (let num of this) {
//     if (compare(num)) ans.push(num);
//     }
//     return ans;
// };

// const newArr = arr.filtering((num) => num > 25);
// console.log(newArr);

// const a = [10, 40, 50, 70];
// const k = a.filtering((num) => num < 70)
// console.log(k);


// const arr = [10, 20, 30, 40, 50];

// const newArr = arr.map((num) => num * 2);
// console.log(newArr);

const products = [
  // Electronics
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 200,
    inStock: true,
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    category: "Electronics",
    price: 300,
    inStock: true,
  },
  {
    id: 5,
    name: "Keyboard",
    category: "Electronics",
    price: 75,
    inStock: true,
  },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  {
    id: 7,
    name: "A Brief History of Time",
    category: "Books",
    price: 30,
    inStock: true,
  },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  {
    id: 9,
    name: "Coffee Maker",
    category: "Appliances",
    price: 150,
    inStock: false,
  },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  {
    id: 12,
    name: "Microwave Oven",
    category: "Appliances",
    price: 220,
    inStock: true,
  },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  {
    id: 16,
    name: "Desk Lamp",
    category: "Home Goods",
    price: 35,
    inStock: true,
  },
  {
    id: 17,
    name: "Scented Candle",
    category: "Home Goods",
    price: 15,
    inStock: true,
  },
  {
    id: 18,
    name: "Picture Frame",
    category: "Home Goods",
    price: 22,
    inStock: false,
  },

  // Groceries
  {
    id: 19,
    name: "Organic Apples",
    category: "Groceries",
    price: 5,
    inStock: true,
  },
  {
    id: 20,
    name: "Artisan Bread",
    category: "Groceries",
    price: 8,
    inStock: true,
  },
];



// reduce

// const totalPrice = products.reduce((acc, value) => {
//     if (value.inStock)
//         return acc + value.price;
//     else
//         return acc;
// }, 0);

// console.log(totalPrice);


// Data Structure

// const arr = [10, 20, 30, 10, 23, 23, 20];
// console.log(arr);

// const s1 = new Set(arr);
// console.log(s1);



// const arr = ["rogan", 'pokemon', 'asif', 'akmal', 'asif'];

// const set = [...new Set(arr)];
// console.log(set);


// map

const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10, 20, 30], "Mohit"]
]);

console.log(m1);