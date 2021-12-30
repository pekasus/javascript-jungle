const express = require('express');
const path = require('path');
const app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.send('OK');
});
app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
