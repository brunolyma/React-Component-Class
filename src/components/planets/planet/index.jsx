import { GrayImg } from "../../shared/gray_img"
import { DescriptionWithLink } from "../../shared/DescriptionLink/"
import { Link } from "react-router-dom"

export const Planet = (props) => {
  return (
    <div className="planet" key={props.index}>
      <Link to={`/planet/${props.id}`}>
        <h4>{props.name}</h4>
      </Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} />
    </div>
  )
}
