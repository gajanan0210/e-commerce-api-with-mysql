const Category = require('../models/categoryModel');

const categoryController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.getAllCategories();
      res.status(200).json({ categories });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = categoryController;
