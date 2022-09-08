import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { Root } from "./components/Root"

import { Home, Pokemonpage } from "./pages/Home"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/pokedex/:pageid" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemonpage />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
