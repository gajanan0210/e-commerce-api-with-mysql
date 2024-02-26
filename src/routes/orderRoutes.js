const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateUser } = require('../middleware/authMiddleware');

router.post('/place-order', authenticateUser, orderController.placeOrder);
router.get('/order-history', authenticateUser, orderController.getOrderHistory);
//router.get('/order/:orderId', authenticateUser, orderController.getOrderById);

module.exports = router;
