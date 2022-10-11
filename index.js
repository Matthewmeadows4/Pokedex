const api_url = 'https://pokeapi.co/api/v2/pokemon?limit=151&species'

async function pokeapi() {
    const response = await fetch(api_url);
    const data = await response.json();

    for (const name in data.results) {
        let pokemon = data.results[name];
        console.log(pokemon.name)        
    }
}
pokeapi();



