const db = require('../db');

const Order = {
  placeOrder: async (userId, total_price, payment_mode, address) => {
    const query = 'INSERT INTO orders (user_id, total_price, payment_mode, address) VALUES (?, ?, ?, ?)';
    await db.query(query, [userId, total_price, payment_mode, address]);
  },
  getOrderHistory: async (userId) => {
    const query = 'SELECT * FROM orders WHERE user_id = ?';
    const [rows] = await db.query(query, [userId]);
    return rows;
  },
  getOrderById: async (orderId) => {
    const query = 'SELECT * FROM orders WHERE id = ?';
    const [rows] = await db.query(query, [orderId]);
    return rows[0];
  },
  
};

module.exports = Order;
