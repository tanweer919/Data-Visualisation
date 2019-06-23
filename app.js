const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile('dashboard.html')
})

app.get('/csv', (req, res) => {
  res.sendFile('accident.json', {root: __dirname});
});
app.get('/visualization', (req, res) => {
  res.render('visualization');
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('view engine', 'ejs')