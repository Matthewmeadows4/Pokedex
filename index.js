//const api_url = 'https://pokeapi.co/api/v2/pokemon/${i}'
//const limit = '?limit=151'

const pokedex = document.getElementById("pokedex");

function displayMon() {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const input = document.getElementById("poke");
  fetch(url + input.value)
    .then((res) => res.json())
    .then(results => {
      document.getElementById('idMon').textContent = results.types[0].type.name
    }
    )}