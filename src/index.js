//Creating an array to store verses data
const versesArray = [];
//Calling the API, and Passing the URL
const linkOfBible = "https://labs.bible.org/api/?passage=random&type=json";
for (let i = 0; i < 5; i++) {
  fetch(linkOfBible, {
    method: "GET",
    // headers: {
    //     "api-key": 'e1588741b7d4e14dea4d9cbe3b5eea55'

    // }
  })
    .then((data) => data.json())
    .then((bibleData) => versesArray.push(bibleData))
    .catch((error) => console.log(error));
}
//The function will render the data from the versesArray
  console.log(versesArray)

  console.log(versesArray.map(verses => (versesArray)));

  
//The function renders the data
const render = (bibleData) => {
  const versesContainer = document.querySelector(".verses-container");
  const verseCard = document.createElement("div");
  const nameBible = document.createElement("h4");
  const bibleP = document.createElement("p");
  nameBible.textContent =
    bibleData[0].bookname +
    " " +
    bibleData[0].chapter +
    ":" +
    bibleData[0].verse;
  bibleP.innerHTML = bibleData[0].text;
  console.log(bibleData);
  verseCard.append(nameBible, bibleP);
  versesContainer.append(verseCard);
};

//Create an event listener that instead reloading the page the user can click to get a new verse.
