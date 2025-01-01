const express = require('express');
const optRouter = require("./src/routes/routes")
// const port = process.env.PORT || 8000
const port = 3000

const app = express();
app.use(express.json());

// app.use(process.env.OTP_ROUTE_URL,optRouter)
app.use('/api/v1/otp',optRouter)


app.listen(port, () => console.log(`Server running on port ${port}`));