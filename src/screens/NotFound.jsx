import { Link } from "react-router-dom"

export function NotFoundScreen() {
  return (
    <>
      <div>
        <h1>Página não encontrada</h1>
        <Link to="/">Voltar à lista</Link>
      </div>
    </>
  )
}
