const calculator=require('./calculator');
const express=require("express");
let app=express();
const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });
let results=[];
const a={
    name:"Ciao",
    surname:"Mondo"
};

app.get('/calculator',(_req,res)=>{
    res.sendFile(__dirname+'/form.html');
})

app.post('/calculator',encodeUrl,(req,res)=>{
    const x=parseInt(req.body.x);
    const y=parseInt(req.body.y);
    results.push("Sum is: "+calculator.add(x,y)+" difference is: "+calculator.sub(x,y));
    res.sendFile(__dirname+'/form.html');
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
})