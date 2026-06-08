const express = require('express');

const app = express();

// app.use('/user',(req,res)=>{
//     res.send({name:'Asif'});
// })

// get

app.use(express.json());

app.get('/user',(req,res)=>{
    res.json({name:'Asif', age:20})
})

app.post('/user',(req,res)=>{
    console.log(typeof req.body.age);
    res.end('Data saved successfully');
})

app.listen(8000,()=>{
    console.log('Listening to port 8000');
})