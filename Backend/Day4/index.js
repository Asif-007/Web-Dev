const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end('Hello Coder Army');
    }
    else if(req.url==='/contact'){
        res.end('Contact Page');
    }
    else if(req.url==='/about'){
        res.end('About Page');
    }
    else{
        res.end('Page Not Found');
    }
})

server.listen(4000,()=>{
    console.log('Server listening at port 4000');
})