const express = require("express");
const { parse } = require("node:path");
const app = express();

const BookStore = [
  { id: 1, name: "Harry Porter", author: "DevFlux" },
  { id: 2, name: "Friends", author: "Vikas" },
  { id: 3, name: "Nexus", author: "Rohit" },
  { id: 4, name: "DSA", author: "Mahara" },
  { id: 5, name: "Prem Kahani", author: "Rohan" },
  { id: 6, name: "Lets C", author: "Vikas" },
];

app.use(express.json());
app.get("/books", (req, res) => {
  // res.send(BookStore);
  console.log(req.query);
  const Book = BookStore.filter(ele=>ele.author===req.query.author)
  res.send(Book);
  console.log(Book);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const Book = BookStore.find((info) => info.id === id);
  res.send(Book);
});

app.post("/books", (req, res) => {
  BookStore.push(req.body);
  res.send("Data Saved Successfully");
});

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
