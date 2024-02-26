const Product = require('../models/productModel');

const productController = {
  getProductsByCategory: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const products = await Product.getByCategoryId(categoryId);
      res.status(200).json({ products });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getProductDetails: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.getById(productId);
      res.status(200).json({ product });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = productController;
