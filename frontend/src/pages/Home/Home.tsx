import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import React, { useEffect } from "react"
import { filterPokemonsByName } from "./pokemonfilter"

const pokemonList = [
  {
    name: "Carapuce",
    id: 7,
    source: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "Carabaffe",
    id: 8,
    source: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "Tortank",
    id: 9,
    source: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
]

function fetchPokemon() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
  //.then(pokemonData => console.log(pokemonData))
}

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  useEffect(() => {
    console.log("Hello World")
  }, [filterValue])

  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])

  useEffect(() => {
    fetchPokemon().then(pokemonData => updatePokemonList(pokemonData))
  }, [])

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {filterPokemonsByName(pokemonList, filterValue).map(({ name, id }) => {
        return (
          <Pokemon
            name={name}
            pokenumber={id}
            source={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
            key={id}
          />
        )
      })}
    </div>
  )
}
