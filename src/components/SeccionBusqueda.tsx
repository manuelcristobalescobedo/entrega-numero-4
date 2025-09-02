import "./App.css";
import React from "react";


const SeccionBusqueda: React.FC = () => {

return (
    <>
        <header className="SeccionBusqueda"></header>
            <nav>
                <a href ="buscar-todo">Buscar todo</a>
                <a href ="hoteles">Hoteles</a>
                <a href ="cosas-que-hacer">Cosas que hacer</a>
                <a href ="restaurantes">Restaurantes</a>
                <a href ="vuelos">Vuelos</a>
            </nav>

            <div id="dondeIr">
                <h1>¿Adonde quieres ir?</h1>
            </div>

            <div className="SeccionBusqueda">
                <section className="SeccionBusqueda"></section>
                <input placeholder="Busca tu destino"/>
                <button className ="botonDeBusqueda">Buscar</button>
            </div>
        </>
        )
    };

export default SeccionBusqueda;