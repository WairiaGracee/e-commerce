require('dotenv').config(); //loads the environment variables form .env into process.env

const express = require('express');//import express
const mongoose = require('mongoose');//import mongoose for mongoDB

const app = express();//initialize express
const PORT = process.env.PORT || 5000;//tells the app what port it runs on

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected 🎉'))
.catch(err => console.error('MongoDB connection error:', err));


