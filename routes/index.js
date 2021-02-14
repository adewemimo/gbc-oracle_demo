var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const stock = {};
  const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo');
  const rawStocks = await response.json();
  stock.symbol = rawStocks['Global Quote']['01. symbol'];
  stock.price =  rawStocks['Global Quote']['05. price'];
  stock.volume =  rawStocks['Global Quote']['06. volume'];
  console.log(stock);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(stock));
});

module.exports = router;
