const express = require("express");
const app = express();

app.use(express.json());

// app.use('/user',  (req,res,next)=>{
//     console.log("First")
//     // res.send("Hello");
//     console.log("Hello first");
//     next();
// },(req,res)=>{
//     console.log("Second");
//     res.send("Second Hello");
// })

// app.use('/user', (req,res,next)=>{
//     console.log("first");
//     next();
//     console.log('sixth');
// })
// app.use('/user', (req,res,next)=>{
//     console.log("second");
//     next();
//     console.log('fifth');
// })
// app.use('/user', (req,res)=>{
//     console.log("third");
//     res.send("Hello");
//     console.log('fourth');
// })

app.use("/user", (req, res, next) => {
  console.log(`${Date.now()} ${req.method} ${req.url}`);
  next();
});

app.get("/user", (req, res) => {
  res.send("Info displayed");
});
app.post("/user", (req, res) => {
  res.send("Info added");
});
app.delete("/user", (req, res) => {
  res.send("Info deleted");
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
