//const api_url = 'https://pokeapi.co/api/v2/pokemon/${i}'
//const limit = '?limit=151'

const pokedex = document.getElementById("pokedex");

function displayMon() {
  //const promises = [];
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const input = document.getElementById("poke");
  const pokeArray = [];
  
 pokeArray.push(fetch(url + input.value).then((res) => res.json()))
    Promise.all(pokeArray).then(results => {
        const pokemon = results.map(data => ({
            na
        })
        )
     
        
      } );
    })

}