//Adding the event Listener to DOMCOntentloaded Event
document.addEventListener("DOMContentLoaded", () => {
  //Creating an array to store verses data
  const versesArray = [];

  //Calling the API, and Passing the URL
  const linkOfBible = "https://labs.bible.org/api/?passage=random&type=json";

  for (let i = 0; i < 5; i++) {
    fetch(linkOfBible)
      .then((data) => data.json())
      .then((bibleData) => {
        versesArray.push(bibleData);
        if (i === 4) {
          render(versesArray);
        }
      })
      .catch((error) => console.log(error));
  }

  //The function renders the data
  const render = (versesArray) => {
    const button = document.createElement("button");
    versesArray.forEach((verse) => {
      const versesContainer = document.querySelector(".verses-container");
      const verseCard = document.createElement("div");
      const nameBible = document.createElement("h4");
      const bibleP = document.createElement("p");
      nameBible.textContent =
        verse[0].bookname + " " + verse[0].chapter + ":" + verse[0].verse;
      bibleP.innerHTML = verse[0].text;
      verseCard.append(nameBible, bibleP);
      versesContainer.append(verseCard,button);
    });
  };

  //Create an event listener that instead reloading the page the user can click to get a new verse.
});
