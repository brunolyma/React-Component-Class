export function GrayImg (props) {
    return (
        <img className={ props.gray ? "gray-img" : "color-img" }
        src={props.img_url}
        alt='Planet Solar System'
      />
    )
}