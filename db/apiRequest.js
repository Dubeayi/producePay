'use strict';
var request = require('request');
var fs = require('fs');
const csv = require('fast-csv');
const ws = fs.createWriteStream('/Users/macuser/producePay/producePay/db/seedData.csv');


// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=BTC&symbol=ETH&apikey=J9QPH1EIVAZH79ZB';
var url2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

request.get({
    url: url2,
    json: true,
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {

      var filer = `var file =
      ${JSON.stringify(data)}

      module.exports = file`

      // for (var i = 0; i < data.length; i++) {
      //   table.push(data[i]);
      // }

      // file(table);



      // fs.writeFileSync (file.data, table, function(err) {
      //   if (err) throw err;
      //   console.log('success');
      //   });


      fs.writeFile ('/Users/macuser/producePay/producePay/db/seedData.js', filer, function(err) {
        if (err) throw err;
        console.log('complete');
        });


    }
});

//Querying all active stocks and ETFs as of the latest trading day:
//https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=demo