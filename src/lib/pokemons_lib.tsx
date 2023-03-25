export type PokemonListType = {
    name: string;
    url: string;
  };
  
  export async function getPokemonsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const json = await res.json();
    const data = await json.results;
    console.log("data a pokemons_lib");
    //console.log(data)
    return data;
  }

  