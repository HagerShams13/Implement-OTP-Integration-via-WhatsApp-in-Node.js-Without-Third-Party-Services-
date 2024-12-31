const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

//After OTP Generation
async function storeOTP(phone, otp, ttl = 300) {//5 minutes
    await redis.set(`otp:${phone}`, otp, 'EX', ttl);
}

//For OTP Validation
async function getOTP(phone) {
    return await redis.get(`otp:${phone}`);
}

//After a successful Verification 
async function deleteOTP(otp) {
    return await redis.del(otp)
}

module.exports = { storeOTP, getOTP, deleteOTP };
