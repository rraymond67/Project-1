const characterDiv = document.querySelector("#character-data");
const searchSection = document.querySelector("#search");
const characterHouse = document.querySelector("#info-house");
const searchInput = document.querySelector("#blank");

async function listCharacter() {
  try {
    const url = `http://hp-api.herokuapp.com/api/characters`;
    const res = await axios.get(url);
    const characterData = res.data; // the brackeet makes sure you acces the info inside the data array it fetches 
    let inputValue = searchInput.value
    const filterCharacter = characterData.filter(character => character.name === inputValue);
    console.log(filterCharacter);
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

  // Add poster
    const characterImg = document.createElement("img");
    characterImg.src = element.image;
    characterImg.alt = `Photo of ${element.name}`;
    characterDiv.appendChild(characterImg); 

  //add ancestry 
    const characterAnces = document.createElement('h3');
    characterAnces.innerText = `${element.ancestry}`
    characterDiv.appendChild(characterAnces);

  //add house
    if (element.house === "Ravenclaw") {
      const house = document.createElement("img");
      house.src = "./assets/Raven.png";
      house.alt = "image of the Ravenclaw house logo";
      characterHouse.appendChild(house);
    } else if (element.house === "Hufflepuff") {
      const house = document.createElement("img");
      house.src = "./assets/Hufflepuff.png";
      house.alt = "image of the Hufflepuff house logo";
      characterHouse.appendChild(house);
    } else if (element.house === "Slytherin") {
      const house = document.createElement("img");
      house.src = "./assets/Slytherin.png";
      house.alt = "image of the Slytherin house logo";
      characterHouse.appendChild(house);
    } else if (element.house === "Gryffindor") {
      const house = document.createElement("img");
      house.src = "./assets/Gryffindor.png";
      house.alt = "image of the Gryffindor house logo";
      characterHouse.appendChild(house);
    }
    
});
  
};

searchSection.addEventListener("click", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  listCharacter();
  removeCharacter();
  removeHouse();
}

function removeCharacter() {
  characterDiv.innerHTML = "";
}
function removeHouse() {
  characterHouse.innerHTML = "";
}



