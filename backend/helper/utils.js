const nodemailer = require('nodemailer');
const otps=require("../models/userOtp");
const bcrypt = require("bcrypt");



const sendOtpToEmail = (email, otp,path) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use the email service you prefer
        auth: {
            user: 'wahabbaig0@gmail.com',
            pass: 'bzrl ermj gelh rwhq',
        },
    });
    const mailOptions = {
        from: 'wahabbaig0@gmail.com', // Sender's email address
        to: email, // Recipient's email address
        subject: 'SignUp Verification', // Email subject
        text: `This is a your OTP for ${path} ${otp}`, // Email content (text)
        // You can also use HTML content if needed:
        // html: '<p>This is a test email sent from Nodemailer.</p>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email: ' + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

const validateOTP = async (email, otp) => {
    const otpData = await otps.findOne({ used: false, email: email,expiresAt: { $gt: new Date() }})
    const isOtpValid = await bcrypt.compare(otp, otpData.otp);
    if (isOtpValid) {

        const now = new Date();
        // Mark the OTP as used and associate it with the user
        otpData.used = true;
        await otpData.save();
        return true; // OTP is valid and associated with the user

    }

    return false; // OTP not found or already used
};


module.exports = {
    validateOTP,
    sendOtpToEmail

}