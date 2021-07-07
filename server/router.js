const express = require('express')
const router = express.Router();
const controller = require('./controller.js')

router
  .route('/cryptos')
  .get(controller.get);

module.exports = router;