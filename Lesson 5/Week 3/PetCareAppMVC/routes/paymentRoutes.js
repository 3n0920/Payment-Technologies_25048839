const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/auth');
const paymentController = require('../controllers/paymentController');

router.get(
  '/payments/prepare/:serviceId',
  isLoggedIn,
  paymentController.preparePayment
);

router.post('/payments/mock/:serviceId', paymentController.createMockPayment);

module.exports = router;
