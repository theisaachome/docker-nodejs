const express = require('express');

const app = express();

app.get("/",(req,res,next)=>{
    res.send("<h2>Nodejs API </h2> <p>hello in development</p>")
})
const port = process.env.PORT ||3000;
app.listen(port,()=>{console.log(`listening on port ${port}`);})