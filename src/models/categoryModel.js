const db = require('../db');

const Category = {
  getAll: async () => {
    const query = 'SELECT * FROM categories';
    const [rows] = await db.query(query);
    return rows;
  },
  getById: async (categoryId) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    const [rows] = await db.query(query, [categoryId]);
    return rows[0];
  },
 
};

module.exports = Category;
