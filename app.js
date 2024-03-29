const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.render('visualization');
});
app.get('/csv', (req, res) => {
  res.sendFile('accident.json', {root: __dirname});
});
app.listen(process.env.PORT||4000, () => {
  console.log("server started");
});