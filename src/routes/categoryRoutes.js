const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/categories', categoryController.getAllCategories);
//router.get('/categories/:categoryId', categoryController.getCategoryById);

module.exports = router;
