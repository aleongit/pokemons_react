export const ITEMS_PAGE = 12
export const ITEMPS_TOTAL = 120

export type PokemonListType = {
  name: string
  url: string
}

export type PokemonType = {
  name: string
  id: number
}

export async function getTotalPokemons() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ITEMPS_TOTAL}&offset=0`)
  const json = await res.json()
  const data = await json.results
  //console.log(data.length)
  return data.length
}

export async function getPokemonsData(limit: number, offset: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const json = await res.json()
  const data = await json.results
  //console.log(data)
  return data
}

export async function getPokemonData(id: any) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await res.json()
  //console.log("data pokemon id");
  //console.log(id)
  //console.log(data)
  return data
}

export function getIdPokemon(url: string) {
  //extrec id de url
  const split = url.split('/')
  const id = split[split.length - 2]
  return id
}
