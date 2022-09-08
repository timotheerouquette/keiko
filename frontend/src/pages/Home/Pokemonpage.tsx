import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { useParams } from "react-router-dom"
import { Pokemonelement } from "../../components/Pokemonelement"

async function fetchSinglePokemon(id: string) {
  const response = await fetch("http://localhost:8000/pokemon/" + id, { headers: { accept: "application/json" } })
  //throw ""
  return response.json()
}

interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
}

export const Pokemonpage = () => {
  const params = useParams()

  const [pokemon, setPokemon] = useState({ id: 1, name: "", height: 0, weight: 0 })

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasFailed, setHasFailed] = useState<boolean>(false)

  useEffect(() => {
    fetchSinglePokemon(String(params.id))
      .catch(() => {
        console.log("API request error")
        setHasFailed(true)
      })
      .then(response => setPokemon(response))
      .then(() => setIsLoading(false))
  })

  if (hasFailed) {
    return <div className={styles.intro}>failed to load</div>
  } else {
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.intro}>
            <Pokemonelement
              name={pokemon.name}
              pokenumber={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
              front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"}
              back={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + pokemon.id + ".png"
              }
              shinyfront={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pokemon.id + ".png"
              }
              shinyback={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/" +
                pokemon.id +
                ".png"
              }
              key={pokemon.id}
            />
          </div>
        )}
      </div>
    )
  }
}
