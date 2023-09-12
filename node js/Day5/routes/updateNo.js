const router= require('express').Router()
const accountSid = 'AC2d4325c814ebf48a4a1c4bc27663e342';
const authToken = '495b7c39444db2cdad2a06a71aa8f4a0';
const twilio = require('twilio')
const client = require('twilio')(accountSid, authToken);
const jwt = require("jsonwebtoken");
const otpgene=require('otp-generator')
// const otp = generateOTP();

const updateMobileNo = async (req, res) => {
    const {number, email, role } = req;
    const {
        body: { newContryCode, newMobileNo },
    } = req;
   
    if (!newContryCode || !newMobileNo) {
        return res.send("Please provide country code and mobile number");
    }
    const otp = generateOtp(6);
    const result = await client.messages.create({
        from: "+18506603227",
        to: newContryCode+newMobileNo,
        body: "hello world"
    });
    const otpToken = jwt.valid(
        {
            otp: otp,
            uid: uid,
            email: email,
            role: role,
            exp: Math.floor(Date.now() / 1000) + 60,
        },"Mysecreatekey"
       
    );
    res.send({ otpToken, result });
};

// function generateRandomOTP() {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }
// const otp = generateRandomOTP();
// const phoneNumber = '+918320005820';

// client.messages
//     .create({
//         body: `${otp}`,
//         from: '+18146795637', // Your Twilio phone number
//         to: '+919510941213'
//     })
//     .then(message => {
//         console.log(`OTP sent successfully to ${phoneNumber}`);
//         console.log(`Message SID: ${message.sid}`);
//     })
//     .catch(error => {
//         console.error('Error sending OTP:', error);
//     });
   


   

 

 