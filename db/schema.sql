
DROP TABLE IF EXISTS Cryptos;

CREATE TABLE Cryptos (
  id VARCHAR PRIMARY KEY,
  symbol VARCHAR,
  name VARCHAR,
  image VARCHAR,
  current_price INT,
  market_cap INT,
  market_cap_rank INT,
  fully_diluted_valuation INT,
  total_volume INT,
  high_24h INT,
  low_24h INT,
  price_change_24h INT,
  price_change_percentage_24h INT,
  market_cap_change_24h INT,
  market_cap_change_percentage_24h INT,
  circulating_supply INT,
  total_supply INT,
  max_supply INT,
  ath INT,
  ath_change_percentage INT,
  ath_date VARCHAR,
  atl INT,
  atl_change_percentage INT,
  atl_date VARCHAR,
  roi VARCHAR,
  last_updated VARCHAR
);

-- COPY Cryptos()
COPY Cryptos(id, symbol, name, image, current_price, market_cap, market_cap_rank, fully_diluted_valuation, total_volume, high_24h, low_24h, price_change_24h, price_change_percentage_24h, market_cap_change_24h, market_cap_change_percentage_24h, circulating_supply, total_supply, max_supply, ath, ath_change_percentage, ath_date, atl, atl_change_percentage, atl_date, roi, last_updated)
FROM '/Users/macuser/producePay/producePay/db/sample.js'
DELIMITER ','
CSV HEADER;