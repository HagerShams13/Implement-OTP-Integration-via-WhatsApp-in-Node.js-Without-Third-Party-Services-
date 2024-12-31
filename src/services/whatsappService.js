
const whatsappAPI =async()=>{
    //WhatsApp API Configurations
    const url = process.env.WHATSAPP_API_URL || `https://graph.facebook.com/v16.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const payload = {
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'template',
        template: {
            name: 'otp_verification', // Approved message template name
            language: { code: 'en_US' },
            components: [
                { type: 'body', parameters: [{ type: 'text', text: otp }] }
            ]
        }
    }
    try {
        const response = await axios.post(
            url,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return { success: true, otp };
    } catch (error) {
        console.error("Error sending OTP:", error.response?.data || error.message);
        return { success: false, error: error.response?.data || error.message };
    }
}

module.exports =whatsappAPI;