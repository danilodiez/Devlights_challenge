const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const {isValid} = require('./scripts/stringAnalysis')
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Home page of the API')
})

app.post('/analyze', (req, res, next) => {
  let string = req.body.text
  let result = isValid(string);
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(result)
  res.json({response:result})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})