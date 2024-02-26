const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateUser } = require('../middleware/authMiddleware');

router.post('/add-to-cart', authenticateUser, cartController.addToCart);
router.get('/get-cart', authenticateUser, cartController.getCart);
router.put('/update-cart/:cartItemId', authenticateUser, cartController.updateCartItem);
router.delete('/remove-from-cart/:cartItemId', authenticateUser, cartController.removeFromCart);

module.exports = router;
