const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const routes = require('./routes/routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true 
}));

app.use('/', routes);

app.listen(3001, () =>{
  console.log("Server is now listening on localhost/3001:");
});
