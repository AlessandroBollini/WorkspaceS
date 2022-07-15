const calculator=require('./calculator');
const express=require("express");
let app=express();
let resultSet=[];

app.get('/calculator',(_req,res)=>{
    res.sendFile(__dirname+'/form.html');
})

app.post('/results',(_req,res)=>{
    const results={
        sum:calculator.add(1,2),
        diff:calculator.sub(1,2)
    };
    resultSet.push(results);
    res.send(resultSet);
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
})