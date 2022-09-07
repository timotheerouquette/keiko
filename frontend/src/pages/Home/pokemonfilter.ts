interface Pokemon {
  name: string
  id: number
  weight: number
  height: number
}

export function filterPokemonsByName(pokemons: Pokemon[], name: string) {
  //console.log(name)

  const newList = [] as Pokemon[]

  for (const i in pokemons) {
    //console.log(pokemons[i])
    if (pokemons[i].name.toLowerCase().includes(name)) {
      //console.log(pokemons[i])
      newList.push(pokemons[i])
    }
  }
  //console.log(newList)

  return newList
}
