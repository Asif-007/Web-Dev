const express = require("express");
const { Auth } = require("./middleware/auth");
const app = express();
app.use(express.json());
// CRUD

// DB
const FoodMenu = [
  { id: 1, food: "Chowmien", category: "veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "non-veg", price: 500 },
  { id: 3, food: "Chicken", category: "non-veg", price: 500 },
  { id: 4, food: "Mutton", category: "non-veg", price: 500 },
  { id: 5, food: "Momo", category: "veg", price: 500 },
  { id: 6, food: "Chai", category: "veg", price: 500 },
  { id: 7, food: "Rajma", category: "veg", price: 500 },
  { id: 8, food: "Roti", category: "veg", price: 500 },
  { id: 9, food: "Lollipop", category: "non-veg", price: 500 },
  { id: 10, food: "Paneer", category: "veg", price: 500 },
  { id: 11, food: "Egg Curry", category: "veg", price: 500 },
  { id: 12, food: "Khorma", category: "non-veg", price: 500 },
  { id: 13, food: "Butter Chicken", category: "non-veg", price: 500 },
  { id: 14, food: "Kabab", category: "non-veg", price: 500 },
];
// user cart
const AddToCart = [];

// Authenticate
app.use("/admin",Auth);
app.get("/food", (req, res) => {
  res.send(FoodMenu);
});

app.post("/admin", (req, res) => {
  FoodMenu.push(req.body);
  res.status(200).send("Data Saved Succesfully");
});

app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = FoodMenu.findIndex((item) => item.id === id);
  if (index === -1) return res.send("Data does not exist");
  FoodMenu.splice(index, 1);
  res.status(200).send("Data deleted successfully");
});


app.get('/user',(req,res)=>{
    if(AddToCart.length!==0)
       return  res.status(200).send(AddToCart)
    res.status(404).send("Data does not exist");
})

app.post("/user",(req,res)=>{
    AddToCart.push(req.body);
    res.status(201).send("Data added succesfully");
})

app.delete("/user/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    if(AddToCart.length===0)
        return res.status(404).send("Data does not exist");
    const index = AddToCart.findIndex(ele=>ele.id===id);
    if(index===-1)
        return res.status(404).send("Data does not exist");
    AddToCart.splice(index,1);
    res.status(200).send("Deleted Succesfully");
})

app.get('/dummy',(req,res)=>{
  try{
    throw new Error('Cannot connect');
    res.send("Request responded");
  }catch(err){
    res.send(err.message);
  }
})

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
