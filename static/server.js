const express= require("express");
const path=require('path');
const app= express();

app.get('/',function(req,res){
    res.send('nodemon server')
});
app.get('/file',function(req,res){
    res.sendFile(path.join(__dirname,'./html_files','index.html',));
})

app.listen(45,function(error){
    if(error){throw 404 }
    console.log("Server is listening at port 45")
})