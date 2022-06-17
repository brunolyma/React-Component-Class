export function DescriptionWithLink(props) {
  if(!props.description)
    return null

  if (props.link) {
    return (
      <>
        <p>{props.description}</p>
        <p>
          <a href={props.link} target="_blank">
            Texto original
          </a>
        </p>
      </>
    )
  } else {
    return (
      <>
        <u>
          <p>{props.description}</p>
        </u>
      </>
    )
  }
}
