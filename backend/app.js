const express = require('express');
const connectDB = require('./src/Database/connectDb');
const erorController = require('./src/controllers/errorController');
const app = express();

//Connect Database
connectDB();

app.use(express.json({ limit: '10kb' }));

app.use('/api/ecommerce', require('./src/routes/authRoutes'));
app.use('/api/ecommerce', require('./src/routes/userRoutes'));
app.use('/api/ecommerce', require('./src/routes/productRoutes'));
app.use('/api/ecommerce', require('./src/routes/cartRoutes'));
app.use('/api/ecommerce', require('./src/routes/orderRoutes'));

app.use(erorController);
module.exports = app;
