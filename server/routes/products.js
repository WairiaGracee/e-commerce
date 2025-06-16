const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // import mongoose model

// GET /products - fetch all products from MongoDB
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // fetch from MongoDB
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /products - add a new product to MongoDB
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create product' });
  }
});

module.exports = router;

