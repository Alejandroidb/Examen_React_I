import { useState } from 'react'
import Grilla from './components/Grilla'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MiApi from './components/MiApi'
import Filtro from './components/Buscador'

function App() {
  const [amiibos, setAmiibos] = useState([])

  return (
    <div>
      <h1>Amiibos Disponibles</h1>
      <Filtro amiibos={amiibos} setAmiibos={setAmiibos} />
      <MiApi setAmiibos={setAmiibos} />
      <Grilla amiibos={amiibos}/>
    </div>
  )
}

export default App
