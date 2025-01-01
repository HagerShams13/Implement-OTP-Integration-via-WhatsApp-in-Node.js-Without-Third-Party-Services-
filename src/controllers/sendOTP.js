const { storeOTP } = require("../services/redisService");
const generateOtp = require("../utility/OTPUtil/GenerateOTP");
const whatsappAPI = require ("../services/whatsappService")
const axios = require('axios');

const SendOTP = async(req,res)=>{    
    //Checking phone number exist or not
    const { phoneNumber } = req.body;
    if (!phoneNumber) return res.status(400).send({ error: 'Phone number is required' });
    
    //Generating the OTP
    const otp = generateOtp();
    //Storing OTP in Redis
    await storeOTP(phoneNumber,otp)

    //Sending OTP
    const result =  await whatsappAPI(phoneNumber,otp)
    return res.status(result.success ? 200 : 500).json(result);
};
module.exports = SendOTP;