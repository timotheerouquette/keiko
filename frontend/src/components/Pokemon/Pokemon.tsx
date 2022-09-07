import { useEffect } from "react"
import styles from "./Pokemon.module.css"

interface Props {
  name: string
  pokenumber: number
  weight: number
  height: number
  source: string
  key: number
}

export const Pokemon = ({ name, pokenumber, weight, height, source }: Props) => {
  return (
    <div className={styles.pokemon}>
      <p>{name}</p>
      <img src={source} />
      <p>Id: {pokenumber}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}
