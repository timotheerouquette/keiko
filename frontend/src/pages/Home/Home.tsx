import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"

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

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      {pokemonList.map(({ name, id }) => {
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
