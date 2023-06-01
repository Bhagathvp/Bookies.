const fast2sms = require("fast-two-sms");
require("dotenv").config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendMessage = function (mobile,res,next) {
  // let randomOTP = Math.floor(Math.random() * 9000)+1000;
  let randomOTP= 1111;
  client.messages.create({

      body: `Your registraton OTP code is ${randomOTP}`,
      to: mobile, // Text your number
      from: '+13204222269', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid))
    .catch(error => console.log(error))
    return randomOTP;
  }

module.exports = {
  sendMessage,
};

// const accountSid = "AC336f2ef350082f102b91a07ecaa8dcbc";
// const authToken = "06afb985faf50b62218cb0ce91d117f9";
// const verifySid = "VAb8e1eca576ab3f4bbdccb06e8feea036";
// const client = require("twilio")(accountSid, authToken);

// const express = require('express')



// module.exports={
//   sendMessage :(number) =>{
//     client.verify.v2 
//   .services(verifySid)
//   .verifications.create({ to: `+91 ${number} `, channel: "sms" })
//  },
//     check: async (otpCode,number) => {
//           try{
//     const status = await client.verify.v2
//               .services(verifySid)
//               .verificationChecks.create({ to: `+91 ${number}`, code: otpCode });
//                return status
//           }catch(err){
//               console.log(err);
//           }   
//       }
//     }