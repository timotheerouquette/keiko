import { useEffect } from "react"
import styles from "./Pokemonelement.module.css"

interface Props {
  name: string
  pokenumber: number
  weight: number
  height: number
  front: string
  back: string
  shinyfront: string
  shinyback: string
  key: number
}

export const Pokemonelement = ({ name, pokenumber, weight, height, front, back, shinyfront, shinyback }: Props) => {
  return (
    <div className={styles.pokemonelement}>
      <p>{name}</p>
      <div>
        <img src={front} />
        <img src={back} />
      </div>
      <div>
        <img src={shinyfront} />
        <img src={shinyback} />
      </div>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Id: {pokenumber}</p>
    </div>
  )
}
