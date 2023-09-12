const sgMail = require("@sendgrid/mail");
const { RestPassword, welcome } = require("../utils/emailer"); //proper naming covention

exports.resetPassword = async (req, res) => {
  try
  {
    const {
    body: { email, displayname },
  } = req;
  const link = req.protocol + "://" + req.get("host");
  await RestPassword(email, displayname, link);
  //response to user
}

catch(error){
  res.send({ status: "error",Error:error });
}

}

exports.welcome = (req, res) => {
  try{
  const {
    body: { email, displayname },
  } = req;
}
catch{
  
    res.send({ status: "error",Error:error });
  
}
};
