const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const routes = require('./routes/routes');
const port = process.env.PORT || '5000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true 
}));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});
