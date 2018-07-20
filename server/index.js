var express = require('express');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/src/data/assets'));
app.use(express.static(__dirname + '/../client/theming/images'));


app.listen(3004, () => console.log('Example app listening on port 3004!'))