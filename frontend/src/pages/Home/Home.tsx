import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import React, { useEffect } from "react"
import { filterPokemonsByName } from "./pokemonfilter"

async function fetchPokemon() {
  //return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  return response.json()
  //.then(pokemonData => console.log(pokemonData))
}

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const isLoading = true

  //const [filterValue, setFilterValue] = React.useState("")

  //const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //setFilterValue(event.target.value)
  //}

  //useEffect(() => {
  //console.log("Hello World")
  //}, [filterValue])

  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])

  useEffect(() => {
    fetchPokemon()
      .then(pokemonData => updatePokemonList(pokemonData))
      .then(isLoading => true)
  }, [])

  //console.log(pokemonList)

  return (
    <div className={styles.intro}>
      <div>Pokédex !</div>
      <div className={styles.container}>
        {pokemonList.map(({ name, id, weight, height }) => {
          return (
            <Pokemon
              name={name}
              pokenumber={id}
              weight={weight}
              height={height}
              source={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
              key={id}
            />
          )
        })}
      </div>
    </div>
  )
}
