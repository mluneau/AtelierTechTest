const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const playersRoutes = require('./routes/players');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true 
}));

app.use('/', playersRoutes);

app.listen(3001, () =>{
  console.log("Server is now listening on localhost/3001:");
});
