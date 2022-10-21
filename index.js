//const api_url = 'https://pokeapi.co/api/v2/pokemon/${i}'
//const limit = '?limit=151'
const pokeArray = []
const url = `https://pokeapi.co/api/v2/pokemon/`;
const limit = `?limit=1154`
const input = document.getElementById("poke")


function displayMon() {
  pokeArray.push(fetch(url + input.value.toLowerCase())
    .then((res) => res.json()));
    Promise.all(pokeArray).then(results => {
    const pokemon = results.map(data => ({
      id: data.id,
      name: data.name,
      type: data.types.map (type => type.type.name).join(', '),
      image: data.sprites["front_default"],
    }));
document.getElementById('name').textContent = (pokemon[0].name);
document.getElementById('type').textContent = (pokemon[0].type);
document.getElementById('num').textContent = (pokemon[0].id);
  })};

const search = document.getElementById('poke');
const matchList = document.getElementById('match-list')
const searchMon = async searchText => {
  const res = await fetch(url + limit);
  const mons = await res.json()

  let matches = mons.results.filter(mon => {
    const regex =  new RegExp(`^${searchText}`, 'gi');
    return mon.name.match(regex)
  });

  if (searchText.length === 0){
  matches = 0
  }
  outputHTML(matches);
};

const outputHTML = matches => {
  if (matches.length > 0){
    const html = matches.map( match =>
      `<div class="results">
      <ul>${match.name}<ul><span class="pokeSpan" </span></h4>
      </div>`
  )
  .join ('');

  matchList.innerHTML = html.toUpperCase()
    }
  };

  
poke.addEventListener('input', () => searchMon(poke.value))

  function reset(){
    window.location.reload("Refresh")
  }


