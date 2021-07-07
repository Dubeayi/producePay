const db = require('./');

const models = {
  getCrypto: () => {
    let query = db.query(`SELECT * FROM CRYPTOS`);
    return query;
  },

  postCrypto: (crypto) => {

  }
}

module.exports = models;