const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//router.get('/products', productController.getAllProducts);
router.get('/products/category/:categoryId', productController.getProductsByCategory);
//router.get('/products/:productId', productController.getProductById);

module.exports = router;
