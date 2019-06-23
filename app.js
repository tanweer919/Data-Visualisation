const express = require('express');
const app = express();
app.use('view engine', 'ejs')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/csv', (req, res) => {
  res.sendFile('accident.json', {root: __dirname});
});
app.get('/visualization', (req, res) => {
  res.render('visualization');
});
app.listen(process.env.PORT||4000, () => {
  console.log("server started");
});