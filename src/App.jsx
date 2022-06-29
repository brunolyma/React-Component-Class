import HelloWorld from '../src/components/Hello'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'


import './styles/Global.css'
 
function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
