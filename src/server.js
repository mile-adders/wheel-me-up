
// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
// const errorHandler = require( '../middleware/500.js', errorHandler);
// const notFound = require( '../middleware/404.js' ,notFound);
// const logger = require('../middleware/logger.js');

// Routers
// const apiRouter = require('');
const authRouter = require('../auth/router.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Static Routes

// Routes

// app.use(apiRouter);
app.use(authRouter);

// app.use(notFound);
// app.use(errorHandler);

module.exports = {
  server: app,

  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
