const express = require('express');

const app = express();



app.use('/about/:id/:name',(req,res)=>{
    console.log(req.params)
    res.send({id:req.params.id, name:req.params.name})
})

app.use('/contact',(req,res)=>{
    res.send('7901417998')
})  

app.use('/',(req,res)=>{
    res.send("hello")
})
app.listen(4000,()=>{
    console.log('Listening at port 4000');
})