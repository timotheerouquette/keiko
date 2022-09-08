import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { useParams } from "react-router-dom"

async function fetchSinglePokemon(id: number) {
  const response = await fetch("http://localhost:8000/pokemon/" + id, { headers: { accept: "application/json" } })
  //throw ""
  return response.json()
}

export const Pokemonpage = () => {
  const params = useParams()
  const { id } = useParams<{ id?: string }>()

  console.log(fetchSinglePokemon(params.id))

  return <div>Pokemonpage {params.id}</div>
}
