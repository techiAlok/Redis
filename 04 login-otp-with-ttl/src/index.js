const express = require('express');
const Redis = require('ioredis');

const app = express();
app.use(express.json());
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

function otpKey(phoneNumber){
  return `otp:${phoneNumber}`;
}

app.post('/otp', async (req, res)=>{
  const {phoneNumber} = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await redis.set(otpKey(phoneNumber), otp, 'EX', 30);  // OTP will expire in 30 seconds
  res.json({ message:`OTP sent to ${phoneNumber}`, otp: otp });  // In a real application, you would send the OTP via SMS instead of returning it in the response

});

app.post('/otp/verify', async (req,res)=>{
  const { phoneNumber, otp } = req.body;
  const savedOtp = await redis.get(otpKey(phoneNumber));
  if(!savedOtp){
    return res.status(400).json({ message: 'OTP expired or not found' });
  }
  if(savedOtp !== otp){
    return res.status(400).json({ message: 'Invalid OTP' });
  }
  res.json({ message: 'OTP verified successfully' });
  await redis.del(otpKey(phoneNumber));  // Delete the OTP after successful verification
});

app.get('/otp/:phoneNumber/ttl', async (req, res)=>{
  const ttl = await redis.ttl(otpKey(req.params.phoneNumber));
  res.json({ ttl: ttl });
});

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});