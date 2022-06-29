import { Home } from "./screens/Home"
import { PlanetScreen } from './screens/Planet'
import { Routes, Route } from "react-router-dom"
import { NotFoundScreen } from "./screens/NotFound"

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Planet/:id" element={<PlanetScreen/>} />
      <Route path="*" element={<NotFoundScreen/>}/>
    </Routes>
  )
}
