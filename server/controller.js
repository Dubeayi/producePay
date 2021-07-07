const models = require('../db/models.js');

const controller = {
  get: (req, res) => {
    models.getCrypto()
      .then(res => {
        res.status(200).send(res)
      })
      .catch(err => {
        res.status(400).send(err);
      })
  }
}

module.exports = controller;