const sendotp=require('./updateNo')

const updateMobileNo = async (req, res) => {
   
    const {
        body: { newContryCode, newMobileNo },
    } = req;
    if (!newContryCode || !newMobileNo) {
        return res.send("Missing phone number or country code");
    }
    const otp = generateOtp(6);
    const result = await client.messages.create({
        from: "+18506603227",
        to: `+${newContryCode}${newMobileNo}`,
        body: `Hey, Here is your OTP-${otp} From SastaCN!`,
    });
    const otpToken = jwt.sign(
        {
            otp: otp,
            uid: uid,
            email: email,
            role: role,
            exp: Math.floor(Date.now() / 1000) + 60,
        },
        process.env.SECRET_KEY
    );
    res.send({ otpToken, result });
};
const verifyOtp = async (req, res) => {
    const {
        body: { otp, newContryCode, newMobileNo, otpToken },
    } = req;
    const { uid } = req;
    const user = await UserModel.findOne({ uid });
    try {
        const token = jwt.verify(otpToken, process.env.SECRET_KEY);
        if (token.otp === otp) {
            await user.updateOne({
                countryCode: newContryCode,
                mobileNo: newMobileNo,
            });
            return res.send("OTP Verified");
        }
    } catch (error) {
        res.send("OTP is invalid");
    }
};