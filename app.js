let userInput = document.querySelector(".search input");
let ul = document.querySelector("ul");
let infoText = document.querySelector(".info-text");
ul.style.display = "none";

function showWords(result, word) {
  if (result.title) {
    infoText.style.color = "#ef2922";
    infoText.innerHTML = `Nothing found for <b>${word}</b> .`;
  } else {
    infoText.style.color = "#01ad43";
    userInput.value = "";
    infoText.innerText = `Searched ${word}`;
    console.log(result);
  }
}

function searchWords(word) {
  infoText.style.color = "#000";
  infoText.innerText = `Searching ${word}`;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((result) => showWords(result, word));
}

userInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value) {
    searchWords(e.target.value);
  }
});
