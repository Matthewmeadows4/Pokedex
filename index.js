const api_url = 'https://pokeapi.co/api/v2/pokemon?limit=151'


async function pokeapi() {
    const response = await fetch(api_url);
    const data= await response.json()

    let array = []
    for(let i = 1; i <= 151; i++);
    var pokeName =(data.results.map(results => results.name))
    console.log(array + pokeName);}

pokeapi();



