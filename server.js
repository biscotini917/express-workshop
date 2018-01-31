'use strict';
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

module.export = app;

app.use('/', routes);

app.listen(port, () => {
  console.log('Server is listening on port 3000. Ready, willing, and able!')
});
