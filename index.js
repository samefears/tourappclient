const express = require('express');
const app = express();

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const { PORT } = require('./config');

app.use(function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.listen(PORT, () => `Client Server running at http://localhost:${PORT}`);
