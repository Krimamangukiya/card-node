const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
var data = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));


app.get('/', (req, res) => {
  res.render('card', { data });
});

app.get("/product", (req, res) => {
    res.render('product', {data1:data[req.query.i]});
  });
app.listen(2525)