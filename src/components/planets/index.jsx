import React from "react"
import Planet from "./planet"

async function getPlanets() {
  const response = await fetch("http://localhost:3000/public/api/planets.json")
  const data = await response.json()
  return data
}

class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }))
    })
  }

  removeLast = () => {
    let new_planets = [...this.state.planets]
    if (this.state.planets.length) {
      new_planets.pop()
      this.setState(() => ({
        planets: new_planets,
      }))
    } else {
      alert("No more planets to remove!")
    }
  }

  duplicateLastPlanet = () => {
    if (this.state.planets.length) {
      let lastPlanet = this.state.planets[this.state.planets.length - 1]
      this.setState(() => ({
        planets: [...this.state.planets, lastPlanet],
      }))
    } else {
      alert("No planets to duplicate!")
    }
  }

  render() {
    return (
      <>
        <button onClick={this.removeLast}>Remove Last Planet</button>
        <button onClick={this.duplicateLastPlanet}>
          Duplicate Last Planet
        </button>
        {this.state.planets.map((planet, index) => (
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
}

export default Planets
