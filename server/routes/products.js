const express = require('express');
const router = express.Router();
const products = require('../models/product'); // import data

// GET /products
router.get('/', (req, res) => {
  res.json(products); // send product data as JSON
});

module.exports = router;
