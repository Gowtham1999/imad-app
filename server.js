var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function (req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('https://lh3.googleusercontent.com/-vjLoqH3Md6w/V6SlvGbSjaI/AAAAAAAAA5E/36bMsynwhdkE2IZrPr42vOydCrvF1JjfQCEwYBhgL/w140-h140-p/crop_ContactPhoto-IMG_20141006_180535.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
app.get("/counter", function(req,res){
    counter=counter+1;
   res.send(counter); 
});
};


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
