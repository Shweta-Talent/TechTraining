const usermodel = require("../models/usermodel");

exports.user = async (req, res) => {
  const {
    body: { email, password, displayName },
  } = req;

  try {
    const existUser = await usermodel.findOne({ email });

    if (existUser) throw Error("Email already exist");

    const newUser = new usermodel({ email, password, displayName });
    const result = await newUser.save();

    console.log(result);
    if (!result) throw Error("User not created");

    res.status(200).send({ msg: "User created" });
  } catch (error) {
    res.status(500).send({ msg: "Error ", error: error.message });
  }
};
