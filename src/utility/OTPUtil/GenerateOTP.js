const crypto = require('crypto');
const generateOtp = () => Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
module.exports = generateOtp;
