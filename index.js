//const api_url = 'https://pokeapi.co/api/v2/pokemon/${i}'
//const limit = '?limit=151'
const pokeArray = [];
const url = `https://pokeapi.co/api/v2/pokemon/`;
const limit = `?limit=1154`;
const input = document.getElementById("poke");

function displayMon() {
  pokeArray.push(
    fetch(url + input.value.toLowerCase()).then((res) => res.json())
  );
  Promise.all(pokeArray).then((results) => {
    const pokemon = results.map((data) => ({
      id: data.id,
      name: data.name,
      type: data.types.map((type) => type.type.name).join(", "),
      image: data.sprites["front_default"],
    }));
    document.getElementById("name").textContent = pokemon[0].name;
    document.getElementById("type").textContent = pokemon[0].type;
    document.getElementById("num").textContent = pokemon[0].id;
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

function loadPoke(mons, element) {
  if (mons) {
    element.innerHTML = "";
    let innerElement = "";
    mons.forEach((mons) => {
      innerElement += `<li><a href = "#">${mons.name}</a></li>`;
    });
    element.innerHTML = innerElement;
  }else{
    element.innerHTML = ""
  }

}


poke.addEventListener("input", () => searchMon(poke.value));


function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}



  const ulDiv = document.getElementById('ulDiv')

 function hideUl() {
    if (ulDiv.style.display !== "none") {
      ulDiv.style.display = "none";
    } else {
      ulDiv.style.display = "block";
    }
  };



const li = document.getElementById('poke-list');
li.onclick = function(event) {
  const target = getEventTarget(event);
  document.getElementById('poke').value= target.textContent
}

function reset() {
  window.location.reload("Refresh");
}


