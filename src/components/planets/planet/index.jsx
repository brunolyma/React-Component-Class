import { GrayImg } from "../../shared/gray_img"
import { DescriptionWithLink } from "../../shared/DescriptionLink/"
import React from "react"

async function getSatellites(id) {
  const response = await fetch(`http://localhost:3000/public/api/${id}.json`)
  const data = await response.json()
  return data
}

class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: [],
    }
  }

  componentDidMount() {
    getSatellites(this.props.id).then((data) => {
      this.setState(() => ({
        satellites: data["satellites"],
      }))
    })
  }

  render() {
    return (
      <div className="planet" key={this.props.index}>
        <h4>{this.props.name}</h4>
        <DescriptionWithLink
          description={this.props.description}
          link={this.props.link}
        />
        <GrayImg img_url={this.props.img_url} />
        <h4>Satélites</h4>
        <ul>
          {this.state.satellites.map((satellite, index) => (
            <li key={index}>{satellite.name}</li>
          ))}
        </ul>
        <hr />
      </div>
    )
  }
}

export default Planet
