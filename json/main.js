
const express= require('express')
const app =express();

app.get('/',function(req,res){
    res.json({title:"List Of Items"})
});

app.get('/item',function(req,res){
    res.json({Product:'soap',price:20,GST:'2%',total:24})
});

app.get('/items',function(req,res){
    res.json( [{Product:'soap',price:20,GST:'2%',total:24},
        {Product:'shampoo',price:80,GST:'5%',total:120},
        {Product:'Rice',price:50,GST:'3%',total:75},
        {Product:'Dhal',price:100,GST:'4%',total:140}] )
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})
