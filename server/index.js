const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
// const pool = require('../DB/index.js');
const PORT = 3005;

app.use(bodyParser.json());
app.use(morgan('dev'));
//lets us use req.body
app.use(express.json);

app.use(express.static(path.join(__dirname, '..', '/client/dist/')));

app.use('/', router)

app.listen(PORT, () => {
  console.log(`CONNECTED TO PORT: ${PORT}`)
})
