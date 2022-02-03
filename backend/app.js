const express = require('express');
const connectDB = require('./src/Database/connectDb');
const app = express();

//Connect Database
connectDB();

app.use(express.json({ limit: '10kb' }));

app.use('/api/auth', require('./src/routes/authRoutes'));
module.exports = app;
