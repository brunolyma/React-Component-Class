import { useState } from "react"

export const Form = ({addPlanet}) => {

  const initialState = {
    id: '',
    name: '',
    description: '',
    img_url: '',
    link: ''
  }

  const [fields, setFields] = useState(initialState)
  
  const handleFieldsChange = (event) => {
    setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value,
  })
  console.log(fields)
}
  const btnSubmit = (event) => {
    event.preventDefault();
    addPlanet(fields)
    setFields(initialState)
  }

    return (
    <>
      <form onSubmit={btnSubmit}>
      <div className="form">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={fields.name} onChange={ event => handleFieldsChange(event) }/>
        </div>
        <div className="form">
          <label htmlFor="description">description: </label>
          <input type="text" id="description" name="description" value={fields.description} onChange={ event => handleFieldsChange(event) }/>
        </div>
        <div className="form">
          <label htmlFor="img_url">Image: </label>
          <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={ event => handleFieldsChange(event) }/>
        </div>
        <div className="form">
          <label htmlFor="link">Link: </label>
          <input type="text" id="link" name="link" value={fields.link} onChange={ event => handleFieldsChange(event) }/>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
    )
}