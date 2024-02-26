const Order = require('../models/orderModel');

const orderController = {
  placeOrder: async (req, res) => {
    try {
      const { products } = req.body;
      const userId = req.user.userId; // Assuming userId is extracted from JWT
      await Order.placeOrder(userId, products);
      res.status(200).json({ message: 'Order placed successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getOrderHistory: async (req, res) => {
    try {
      const userId = req.user.userId; // Assuming userId is extracted from JWT
      const orderHistory = await Order.getOrderHistory(userId);
      res.status(200).json({ orderHistory });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getOrderDetails: async (req, res) => {
    try {
      const { orderId } = req.params;
      const order = await Order.getById(orderId);
      res.status(200).json({ order });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = orderController;
