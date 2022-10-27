const pokeArray = [];
const url = `https://pokeapi.co/api/v2/pokemon/`;
const limit = `?limit=1154`;
const input = document.getElementById("poke");
const btn = document.getElementById("btn");
const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const fileType = ".png";

const disableButton = function () {
  btn.disabled = true;
};
btn.addEventListener("click", disableButton);


function displayMon() {
  pokeArray.push(
    fetch(url + input.value.toLowerCase()).then((res) => res.json())
    .catch (error => console.log(error) || alert('Hey! Thats not a Pokemon! Try again :)')|| window.location.reload()) )
    
  Promise.all(pokeArray).then((results) => {
    const pokemon = results.map((data) => ({
      id: data.id,
      name: data.name,
      base: data.base_experience,
      type: data.types.map((type) => type.type.name).join(", "),
    }))
    
console.log(pokeArray);
    document.getElementById("name").textContent = pokemon[0].name;
    document.getElementById("type").textContent = pokemon[0].type;
    document.getElementById("num").textContent = pokemon[0].id;
    document.getElementById("base").textContent = pokemon[0].base;
    

    let img = document.createElement("img");
    img.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemon[0].id +
      ".png";
    img.style.width = "30%"
    let monImg = document.getElementById("imgMon");
    monImg.appendChild(img);

  });
}

const search = document.getElementById("poke");
const pokeListElement = document.querySelector("#poke-list");
const searchMon = async (searchText) => {
  const res = await fetch(url + limit);
  const mons = await res.json();

  let matches = mons.results.filter((mon) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return mon.name.match(regex);
  });
  if (searchText.length === 0) {
    matches = 0;
  } 
  
  loadPoke(matches, pokeListElement);
};

function validate() {
  pokeInput = document.getElementById("poke").value;
  const pokeRegex = /^[a-zA-z , -]+$/g;
  if (pokeInput == "") {
    alert("It looks like the input is empyt! Please input Pokemon Name!");
    reset();
  } else if (!pokeRegex.test(pokeInput)) {
    alert("No Special Charaters please!");
    reset();
  }
}

function loadPoke(mons, element) {
  if (mons) {
    element.innerHTML = "";
    let innerElement = "";
    mons.forEach((mons) => {
      innerElement += `<li><a href = "#">${mons.name}</a></li>`;
    });
    element.innerHTML = innerElement;
  } else {
    element.innerHTML = "";
  }
}

poke.addEventListener("input", () => searchMon(poke.value));

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

const ulDiv = document.getElementById("ulDiv");

function hideUl() {
  if (ulDiv.style.display !== "none") {
    ulDiv.style.display = "none";
  } else {
    ulDiv.style.display = "block";
  }
}

const li = document.getElementById("poke-list");
li.onclick = function (event) {
  const target = getEventTarget(event);
  document.getElementById("poke").value = target.textContent;
};

function reset() {
  window.location.reload("Refresh");
}

