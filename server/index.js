var express = require('express');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));



app.listen(3000, () => console.log('Example app listening on port 3000!'))