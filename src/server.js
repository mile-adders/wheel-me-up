'use strict';

const express = require('express');
const carRoute = require('../api-routes/api-routes.js')

const logger = require('../middleware/logger.js')
const app = express() ;

app.use(express.json());

app.use('/api/v1', carRoute );

app.use(logger)

module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` I am a live : ${PORT}`));
    },
  };