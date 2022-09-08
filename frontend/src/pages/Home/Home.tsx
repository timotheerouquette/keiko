import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

async function fetchPokemon(page: string) {
  const response = await fetch("http://localhost:8000/pokemons?page=" + page, {
    headers: { accept: "application/json" },
  })
  //throw ""
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

  const params = useParams()

  useEffect(() => {
    fetchPokemon(String(params.pageid))
      .catch(() => {
        console.log("API request error")
        setHasFailed(true)
      })
      .then(pokemonData => {
        updatePokemonList(pokemonData)
      })
      .then(() => setIsLoading(false))
  })

  if (hasFailed) {
    return <div className={styles.intro}>failed to load</div>
  } else {
    return (
      <div className={styles.intro}>
        <div className={styles.title}>Pokédex</div>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className={styles.arrows}>
              <div>
                <Link to={"/pokedex/" + String(Number(params.pageid) - 1)}>left</Link>
              </div>
              <div>
                <Link to={"/pokedex/" + String(Number(params.pageid) + 1)}>right</Link>
              </div>
            </div>
            <div className={styles.container}>
              {pokemonList.map(({ name, id, weight, height }) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Link to={"/pokemon/" + id}>
                    <Pokemon
                      name={name}
                      pokenumber={id}
                      weight={weight}
                      height={height}
                      source={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
                      key={id}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
}
