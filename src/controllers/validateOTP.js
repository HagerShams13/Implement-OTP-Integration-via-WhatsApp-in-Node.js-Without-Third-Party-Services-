const { getOTP, deleteOTP } = require("../services/redisService");

const validateOTP = async (req, res) => {
    const { phoneNumber, otp } = req.body;
    const storedOtp = await getOTP(phoneNumber);
        if (!storedOtp) {
            return { success: false, message: "OTP expired or not found" };
        }
        if (otp === storedOtp) {
            await deleteOTP(storedOtp)
            return { success: true, message: "OTP validated successfully" };
        }
        return { success: false, message: "Invalid OTP" };
}
module.exports= validateOTP