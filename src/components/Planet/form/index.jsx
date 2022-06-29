import { useState } from "react"

export function Form({ addSatellite }) {
  const initialState = {
    name: "",
  }

  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (event) => {
    setFields({
      ...fields,
      name: event.target.value,
    })
    console.log(fields)
  }

  const btnSubmit = (event) => {
    event.preventDefault()
    addSatellite(fields)
    setFields(initialState)
  }

  return (
    <>
      <form onSubmit={btnSubmit}>
        <div className="form">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={fields.name}
            onChange={(event) => handleFieldsChange(event)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
