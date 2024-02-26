const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./src/utils/errorHandlers');
const authRoutes = require('./src/routes/authRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const productRoutes = require('./src/routes/productRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
