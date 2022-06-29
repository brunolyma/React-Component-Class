import { GrayImg } from "../shared/gray_img"
import { DescriptionWithLink } from "../shared/DescriptionLink/"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { Form } from './form'


async function getPlanet(id) {
  const response = await fetch(`http://localhost:3000/public/api/${id}.json`)
  const data = await response.json()
  return data
}

export const Planet = () => {

  const { id } = useParams()
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState([])
  const [redirect, setRedirect] = useState(false)
  const navegate = useNavigate()

  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatellites(data["satellites"])
      setPlanet(data["data"])
    }, error => {
      setRedirect(true)
    })
  }, [])

  function goToPlanets() {
    navegate('/')
  }

  function addSatellite (newSatellite) {
    setSatellites([...satellites, newSatellite])
  }

  if(redirect) {
   return <Navigate to='/'/>
}

  return (
    <div className="planet" key={planet.index}>
      <h4>{planet.name}</h4>
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <GrayImg img_url={planet.img_url} />
      <h4>Satélites</h4>
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToPlanets}>Voltar à lista</button>
    </div>
  )
}