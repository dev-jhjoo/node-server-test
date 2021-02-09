var express = require('express')
var app = express()

app.listen(3000, function(){
    console.log("start! express server on port 3000");
});

// static dir 지정, image등 static한 데이터 dir 지정가능
app.use(express.static('public'))

app.get('/test', function(req, res){
    // console.log("req=",req);
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', function(req, res){
    // console.log("req=",req);
    res.sendFile(__dirname + "/public/main.html");
});