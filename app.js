const express = require('express');
const res = require('express/lib/response');
const app = express();

// need a view engine
app.set('view engine','ejs');

app.get("/", function(req,res){
    res.render("index")
})

app.listen(3000);