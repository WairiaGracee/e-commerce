require('dotenv').config(); //loads the environment variables form .env into process.env

const express = require('express');//import express
const mongoose = require('mongoose');//import mongoose for mongoDB

const productRoutes = require('./routes/products')
const path= require('path')

const app = express();//initialize express--creates an instance of a web server using express
const PORT = process.env.PORT || 5000;//tells the app what port it runs on

const cors = require('cors');
app.use(cors());




// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected 🎉'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware (optional if you want to handle JSON requests later)
app.use(express.json());

// Use routes
app.use('/products', productRoutes); // <-- Mount route

app.use('/productAssets', express.static(path.join(__dirname,'productAssets')))


app.get('/', async (req, res) => {
    try {
        const Product = require('./models/product'); // Import the model
        const products = await Product.find(); // Fetch from MongoDB
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});