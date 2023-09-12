import sgMail = require("@sendgrid/mail");
import { TEMPLATE_ID,FROM_MAIL } from "../config/sgconfig"; 
if(process.env.SG_API==="string")
sgMail.setApiKey(process.env.SG_API);
TEMPLATE_ID.WELCOME


export const WELCOME = async (emailId:string, firstName:string) => {
    try {
      const message = {
        to: emailId,
        from: FROM_MAIL,
        templateId: TEMPLATE_ID.WELCOME,
        dynamicTemplateData: {
          Name: firstName,
        },
      };
      const awaitresult = sgMail.send(message);
    } catch (error) {
      console.log(error);
    }
  };

  export const verifymail = async (emailId:string, firstName:string, admin_setPassword:string) => {
    try {
      const message = {
        to: emailId,
        from: FROM_MAIL,
        subject: "email verification",
        text: `hello ${firstName}, this is your password to login ${admin_setPassword} and to reset the password visit the following link localhost:3001/user/resetpassword`,
      };
      const awaitresult = sgMail.send(message);   
    } catch (error) {
      console.log(error);
    }
  };

  export const resetpassword = async (emailId:string, firstName:string) => {
    try {
      const message = {
        to: emailId,
        from: FROM_MAIL,
        templateId: TEMPLATE_ID.RESETPASSWORD,
        dynamicTemplateData: {
          Name: firstName,
        },
      };
      const awaitresult = sgMail.send(message);
      console.log("mail sent successfully");
    } catch(error) {
        console.log(error)
    }
  };
  