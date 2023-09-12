const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_API);
const sgConfig = require("../config");

exports.restPassword = async (email, displayname, link) => { 
  try {
    const message = {
      to: email,
      from: sgConfig.FROM_EMAIL,
      templateId: sgConfig.TEMPLATE_ID.FORGOT_PASSWORD_TEMPLATE_ID, 
      dynamicTemplateData: {
        NAME: displayname,
        RESET_PASSWORD_LINK: "https://app.castingnetworks.com/login",
      },
    };
    const awaitresult = sgMail.send(message); 
    console.log("successfull to reset password");

    //response is needed
  } catch (error) {
    console.log(error);
  }
};

exports.welcome = async (displayname, email) => {
  try {
    const message = {
      to: email,
      from: sgConfig.FROM_EMAIL,
      templateId: sgConfig.WELCOME_EMAIL_TEMPLATE_ID,
      dynamicTemplateData: {
        NAME: displayname,
        ROLE_URL: "role urls",
      },
    };
    const awaitresult = sgMail.send(message);
    console.log("successfull to welcome");
  } catch (error) {
    console.log(error);
  }
};
