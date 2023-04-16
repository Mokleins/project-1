//Adding the event Listener to DOMCOntentloaded Event
document.addEventListener("DOMContentLoaded", () => {
  function apiCalling() {
    //Creating an array to store verses data
    const versesArray = [];

    //Calling the API, and Passing the URL
    for (let i = 0; i < 6; i++) {
      fetch("https://labs.bible.org/api/?passage=random&type=json")
        .then((data) => data.json())
        .then((bibleData) => {
          versesArray.push(bibleData);
          if (i === 5) {
            render(versesArray);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  //The function renders the data
  const render = (versesArray) => {
    const versesContainer = document.querySelector(".verses-container");

    versesContainer.innerHTML = "";
    let i = 0;
    versesArray.forEach((verse) => {
      i++;
      const verseCard = document.createElement("div");
      const nameBible = document.createElement("h4");
      const bibleP = document.createElement("p");
      nameBible.textContent =
        verse[0].bookname + " " + verse[0].chapter + ":" + verse[0].verse;
      bibleP.innerHTML = verse[0].text;
      verseCard.setAttribute("id", `box ${i}`);
      verseCard.append(nameBible, bibleP);
      versesContainer.append(verseCard);
    });

    buttonGenerate();
  };

  /*The button will generate new verses. The fuction will create an event listener 
    so it can generate the new verses*/
  const buttonGenerate = () => {
    const container = document.querySelector(".container");
    const btnMessage = document.createElement("button");
    container.innerHTML = "";
    const button = document.createElement("button");
    btnMessage.className = "messageBtn";
    button.className = "cool-button";
    const versesContainer = document.querySelector(".verses-container");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      apiCalling();
    });
    button.textContent = "Generate new verses";
    
    //This button will submit new verse to the user who inserts their phone number
    btnMessage.addEventListener("click", (event) => {
      event.preventDefault();
      alert("hello");
    })
    btnMessage.textContent = "Message";
    container.append(button, btnMessage);
  };
  apiCalling();
});

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC48a766eafdca044f29fa6d5a23db7706";
const authToken = "c2d26d2a58fcb3e7433c676e23e77530";
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({
    body: "Hello from Twilio",
    from: "+18779407005",
    to: "+13013837843",
  })
  .then((message) => console.log(message.sid));
