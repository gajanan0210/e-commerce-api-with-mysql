const db = require('../db');

const Cart = {
  addToCart: async (productId, userId, quantity) => {
    const query = 'INSERT INTO cart (product_id, user_id, qty) VALUES (?, ?, ?)';
    await db.query(query, [productId, userId, quantity]);
  },
  getByUserId: async (userId) => {
    const query = 'SELECT * FROM cart WHERE user_id = ?';
    const [rows] = await db.query(query, [userId]);
    return rows;
  },
  updateCartItem: async (cartItemId, quantity) => {
    const query = 'UPDATE cart SET qty = ? WHERE id = ?';
    await db.query(query, [quantity, cartItemId]);
  },
  removeCartItem: async (cartItemId) => {
    const query = 'DELETE FROM cart WHERE id = ?';
    await db.query(query, [cartItemId]);
  }
};

module.exports = Cart;
