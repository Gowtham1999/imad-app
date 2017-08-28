var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var cont = {
     articleone:` <div class="block">
     <h1>Articleone</h1>
     <div>19 Jan 1999</div>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       <br/>
       Its just the beginning.
     </p>
     </div>`,
     articletwo:` <div class="block">
     <h1>Articleone</h1>
     <div>19 Jan 1999</div>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       Its just the beginning.
     </p>
     <p>
       This is the content of the article one.
       <br/>
       Its just the beginning.
     </p>
     </div> `
     
};

function Createtemplate (data){
    var cont=data.cont;
    var htmltempate = `<!DOCTYPE html>
                     <html>
                     <head>
                <title>Articleone</title>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
 </head> 

 <body>
     <div>
         <a href="/">Homepage</a>
     </div>
     <hr/> 
 </body>
 </html>`;
 return htmlcontent;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:article',function(req,res){
    var article=req.params.article;
   res.send(Createtemplate(cont[article])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
