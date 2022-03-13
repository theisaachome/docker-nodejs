const express = require('express');

const app = express();

app.get("/",(req,res,next)=>{
    res.send("<h2>Nodejs API Update Port</h2>")
})
const port = process.env.PORT ||3000;
app.listen(port,()=>{console.log(`listening on port ${port}`);})