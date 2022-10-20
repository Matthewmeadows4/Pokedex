//const api_url = 'https://pokeapi.co/api/v2/pokemon/${i}'
//const limit = '?limit=151'
const pokeArray = []
const url = `https://pokeapi.co/api/v2/pokemon/`;
const input = document.getElementById("poke");
function displayMon() {
  //for (let i = 1; i < 150 ; i++)
  pokeArray.push(fetch(url + input.value)
    .then((res) => res.json()));

    Promise.all(pokeArray).then(results => {
    const pokemon = results.map(data => ({
      name: data.name,
      type: data.types.map (type => type.type.name).join(', ')
    }));
document.getElementById('name').textContent = (pokemon[0].name) ;
document.getElementById('type').textContent = (pokemon[0].type);
  })}