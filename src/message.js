//Button for sending message
const sendingMessage = () => {
    const container = document.querySelector(".container");
    const btnMessage = document.createElement("button");
    btnMessage.className = "messageBtn";

    //This button will submit new verse to the user who inserts their phone number
    btnMessage.addEventListener("click", (event) => {
      event.preventDefault();
      messageTwilio();
    });

    btnMessage.textContent = "Message";
    container.append(btnMessage);
  };

//Twilio api so I can send messages

require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages.create({
  body: "it was funny right?",
  from: "+18779407005",
  to: "+16463879797",
})
.then( message => console.log(message))
.catch( error => console.log(error))
