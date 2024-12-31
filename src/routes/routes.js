const express = require('express');
const SendOTP = require('../controllers/sendOTP');
const validateOTP = require('../controllers/validateOTP');
const router = express.Router();

router.post('/send-otp',SendOTP);
router.post('/validate-otp',validateOTP);

module.exports = router;
