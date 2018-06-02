const express = require('express');
const mongo = require('mongodb').mongo;
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(8000, function(){
    console.log('Listening on port 8000')
});