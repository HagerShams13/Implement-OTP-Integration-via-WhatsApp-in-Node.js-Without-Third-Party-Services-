const express = require('express');
const SendOTP = require('../controllers/sendOTP');
const validateOTP = require('../controllers/validateOTP');
const optRouter = express.Router();

optRouter.post('/send-otp',SendOTP);

optRouter.post('/validate-otp',validateOTP);

module.exports = optRouter;
