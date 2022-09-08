import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom"
import { Root } from "./components/Root"

import { Home, Pokemonpage } from "./pages/Home"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pokedex/0" />} />
          <Route path="/pokedex/:pageid" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemonpage />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
