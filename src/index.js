//Adding the event Listener to DOMCOntentloaded Event
document.addEventListener("DOMContentLoaded", () => {
  function apiCalling() {
    //Creating an array to store verses data
    const versesArray = [];

    //Calling the API, and Passing the URL
    fetch("https://labs.bible.org/api/?passage=random&type=json")
      .then((data) => data.json())
      .then((bibleData) => {
        versesArray.push(bibleData);
        render(versesArray);
      })
      .catch((error) => console.log(error));
  }

  //The function renders the data
  const render = (versesArray) => {
    console.log(versesArray);

    versesArray.forEach((verse) => {
      const versesContainer = document.querySelector(".verses-container");
      const verseCard = document.createElement("div");
      const nameBible = document.createElement("h4");
      const bibleP = document.createElement("p");
      nameBible.textContent =
        verse[0].bookname + " " + verse[0].chapter + ":" + verse[0].verse;
      bibleP.innerHTML = verse[0].text;
      verseCard.setAttribute("id", "box");
      verseCard.append(nameBible, bibleP);
      versesContainer.innerHTML = "";
      versesContainer.append(verseCard);
    });
    buttonGenerate();
  };

  /*The button will generate new verses. The fuction will create an event listener 
    so it can generate the new verses*/
  const buttonGenerate = () => {
    const button = document.createElement("button");
    const versesContainer = document.querySelector(".verses-container");
    button.addEventListener("click", (event) => {
      // versesArray = [];
      event.preventDefault();
      apiCalling();
    });
    button.textContent = "Generate new verses";
    versesContainer.append(button);
  };
  apiCalling();
});
