import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <div>
        <div>
            <nav>
                <a href="buscar-todo">Buscar todo</a>
                <a href="hoteles">Hoteles</a>
                <a href="cosas-que-hacer">Cosas que hacer</a>
                <a href="restaurantes">Restaurantes</a>
                <a href="vuelos">Vuelos</a>
            </nav>
        </div>

        <div id="dondeIr">
            <h1>¿Adonde quieres ir?</h1>
        </div>

        <div id="searchBar"> 
            <input placeholder="Busca tu destino" />
            <button className="botonDeBusqueda">Buscar</button>
        </div>

        <main>

        </main>
      </div>
    </>
  )
}

export default App
