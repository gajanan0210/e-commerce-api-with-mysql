const Cart = require('../models/cartModel');

const cartController = {
  addToCart: async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user.userId; // Assuming userId is extracted from JWT
      await Cart.addToCart(productId, userId, quantity);
      res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getCart: async (req, res) => {
    try {
      const userId = req.user.userId; // Assuming userId is extracted from JWT
      const cartItems = await Cart.getByUserId(userId);
      res.status(200).json({ cartItems });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  updateCartItem: async (req, res) => {
    try {
      const { cartItemId, quantity } = req.body;
      await Cart.updateCartItem(cartItemId, quantity);
      res.status(200).json({ message: 'Cart item updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  removeFromCart: async (req, res) => {
    try {
      const { cartItemId } = req.body;
      await Cart.removeCartItem(cartItemId);
      res.status(200).json({ message: 'Cart item removed successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = cartController;
