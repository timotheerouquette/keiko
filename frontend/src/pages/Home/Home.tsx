import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"

async function fetchPokemon() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  throw ""
  return response.json()
}

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [hasFailed, setHasFailed] = useState<boolean>(false)

  const [pokemonList, updatePokemonList] = useState<PokemonInfo[]>([])

  useEffect(() => {
    fetchPokemon()
      .catch(() => {
        console.log("API request error")
        setHasFailed(true)
      })
      .then(pokemonData => {
        updatePokemonList(pokemonData)
      })
      .then(() => setIsLoading(false))
  }, [])

  if (hasFailed) {
    return <div className={styles.intro}>failed to load</div>
  } else {
    return (
      <div className={styles.intro}>
        <div>Pokédex !</div>
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    )
  }
}
