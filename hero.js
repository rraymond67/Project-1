const characterDiv = document.querySelector("#character-data");
const searchSection = document.querySelector("#search");
const characterHouse = document.querySelector("#info-house");
const searchInput = document.querySelector("#blank");
const textBook = document.querySelector('#text-info');
const favorite = document.querySelector("#heart");
const showFavorite = document.querySelector("#fav-button");
let favCharacter = [];

async function listCharacter() {
  try {
    const url = `https://hp-api.herokuapp.com/api/characters`;
    const res = await axios.get(url);
    const characterData = res.data; // the brackeet makes sure you acces the info inside the data array it fetches 
    let inputValue = searchInput.value
    const filterCharacter = characterData.filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()));
    showCharacterData(filterCharacter);
  } catch (error) {
    displayError();
  }
};

function displayError() {
  const errorImg = document.createElement("img");
  errorImg.src = "./assets/ERROR.png";
  errorImg.alt = "image of a 404 error image";
  characterDiv.appendChild(errorImg);
}

function showCharacterData(characters) {
  characters.forEach(element => {
    //add character name
   const characterName = document.createElement('h2');
    characterName.innerText = `${element.name}`;
    characterDiv.appendChild(characterName);
    characterName.classList.add("name")

  // Add poster
    const characterImg = document.createElement("img");
    characterImg.src = element.image;
    characterImg.alt = `Photo of ${element.name}`;
    characterDiv.appendChild(characterImg);
    characterImg.classList.add("student");

  //add actor 
    const characterActor = document.createElement('h3');
    characterActor.innerText = `Actor: ${element.actor}`
    characterDiv.appendChild(characterActor);

  //add info tex
    if (element.hogwartsStaff === true) {
      const characterText = document.createElement('p');
      characterText.innerText = `${element.name} is a professor at Hogwarts School, from the house of ${element.house}`;
      textBook.appendChild(characterText);
      characterText.classList.add("text-book"); 
    } else {
    const characterText = document.createElement('p');
    characterText.innerText = `${element.name} is a ${element.ancestry} student from the house of ${element.house}`;
    textBook.appendChild(characterText);
    characterText.classList.add("text-book");
    }

  //add house
    if (element.house === "Ravenclaw") {
      const house = document.createElement("img");
      house.src = "./assets/Raven.png";
      house.alt = "image of the Ravenclaw house logo";
      house.classList.add("houseImage");
      characterHouse.appendChild(house);
    } else if (element.house === "Hufflepuff") {
      const house = document.createElement("img");
      house.src = "./assets/Hufflepuff.png";
      house.alt = "image of the Hufflepuff house logo";
      characterHouse.appendChild(house);
      house.classList.add("houseImage");
    } else if (element.house === "Slytherin") {
      const house = document.createElement("img");
      house.src = "./assets/Slytherin.png";
      house.alt = "image of the Slytherin house logo";
      characterHouse.appendChild(house);
      house.classList.add("houseImage");
    } else if (element.house === "Gryffindor") {
      const house = document.createElement("img");
      house.src = "./assets/Gryffindor.png";
      house.alt = "image of the Gryffindor house logo";
      characterHouse.appendChild(house);
      house.classList.add("houseImage");
    }
    
});
  
};

searchSection.addEventListener("click", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (searchInput.value !== "") {
  listCharacter();
  removeCharacter();
  removeHouse();
  removeText();
  const book = document.querySelector(".character-list");
  book.style.display = "block"; 
  }
}



let favArray;

favorite.addEventListener("click", handleFavorite);
function handleFavorite(event) {
  event.preventDefault();
  if (searchInput.value !== "") {
    favArray.push(favCharacter);
    console.log(favArray);
    // return favArray;
  }
}
showFavorite.addEventListener("click", handleShow);
function handleShow(event) {
  event.preventDefault();
  showCharacterData(favArray)
  removeCharacter();
  removeHouse();
  removeText();
  const fave = document.querySelector(".character-list");
  fave.style.display = "block";
  }



function removeCharacter() {
  characterDiv.innerHTML = "";
}
function removeHouse() {
  characterHouse.innerHTML = "";
}
function removeText() {
  textBook.innerHTML = "";
}