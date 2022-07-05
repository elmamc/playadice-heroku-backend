const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
const v1 = require('./api/v1/v1')
var bodyParser = require('body-parser')

var corsOptions = {
    origin: [/\.localhost:5000$/, /\.playadice-backoffice.herokuapp\.com$/, /\.playadice-frontend.herokuapp\.com$/],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
app.use(bodyParser.json())
app.use('/api/v1', cors(corsOptions), v1)

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || 8080}`)
});
