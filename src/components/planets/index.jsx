import React, { useState, useEffect } from "react"
import { Planet } from "./planet"
import { Form } from "./Form"

async function getPlanets() {
  const response = await fetch("http://localhost:3000/api/planets.json")
  const data = await response.json()
  return data
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"])
    })
  }, [])

  function addPlanet (newPlanet) {
    setPlanets([...planets, newPlanet])
  }

  return (
    <>
      <Form addPlanet={addPlanet} />
      <hr />
      {planets.map((planet, index) => (
        <Planet
          id={planet.id}
          key={index}
          name={planet.name}
          img_url={planet.img_url}
          description={planet.description}
          link={planet.link}
        />
      ))}
    </>
  )
}

export default Planets
