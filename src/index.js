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
    sendingMessage();
    changeColor();
  };

  /*The button will generate new verses. The fuction will create an event listener 
    so it can generate the new verses*/
  const buttonGenerate = () => {
    
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const button = document.createElement("button");
    button.className = "cool-button";
    const versesContainer = document.querySelector(".verses-container");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      apiCalling();
    });
    button.textContent = "Generate new verses";

    container.append(button);
  };

  const sendingMessage = () => {
    const container = document.querySelector(".container");
    const btnMessage = document.createElement("button");
    btnMessage.className = "messageBtn";

    //This button will submit new verse to the user who inserts their phone number
    btnMessage.addEventListener("click", (event) => {
      event.preventDefault();
      alert("works")
    });

    btnMessage.textContent = "Message";
    container.append(btnMessage);
  };

  const changeColor = () => {
    const button = document.querySelector('.cool-button');
    button.addEventListener("mouseover", function() {
      button.style.backgroundColor = "#e79b4a"; 
    })
    button.addEventListener("mouseout", function() {
      button.style.backgroundColor = "#f44242";
    });
  }
  apiCalling();
});



