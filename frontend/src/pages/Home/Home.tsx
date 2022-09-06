import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <Pokemon
        name="Carapuce"
        number="7"
        source="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      />
      <Pokemon
        name="Carabaffe"
        number="8"
        source="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
      />
      <Pokemon
        name="Tortank"
        number="9"
        source="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
      />
    </div>
  )
}
