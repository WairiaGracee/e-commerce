const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    image: String,
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
