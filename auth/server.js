


'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('../middleware/logger.js');

//Esoteric Resources
const errorHandler = require('../middleware/500.js');
const notFound = require( '../middleware/404.js');


// Routers
const authRouter = require('../auth/routes.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Routes
const carRoute = require('../api-routes/api-routes.js');


app.use(authRouter);
app.use('/api/v1', carRoute );

app.use(logger);

app.use(notFound);
app.use(errorHandler);




module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is a live listening on ${PORT}`));
  },
};










