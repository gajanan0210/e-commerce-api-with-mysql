const db = require('../db');

const Product = {
  getAll: async () => {
    const query = 'SELECT * FROM products';
    const [rows] = await db.query(query);
    return rows;
  },
  getByCategory: async (categoryId) => {
    const query = 'SELECT * FROM products WHERE category_id = ?';
    const [rows] = await db.query(query, [categoryId]);
    return rows;
  },
  getById: async (productId) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    const [rows] = await db.query(query, [productId]);
    return rows[0];
  },
 
};

module.exports = Product;
