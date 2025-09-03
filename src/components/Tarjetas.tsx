import React from "react";
import "../App.css";

const Tarjetas: React.FC = () => {

    return (
            <>
                <h1 className="busqueda-titulo">¿A dónde quieres ir?</h1>
                <nav className="busqueda-navegacion">
                    <a className="busqueda-ancla" href="#">Buscar todo</a>
                    <a className="busqueda-ancla" href="#">Hoteles</a>
                    <a className="busqueda-ancla" href="#">Cosas que hacer</a>
                    <a className="busqueda-ancla" href="#">Restaurantes</a>
                    <a className="busqueda-ancla" href="#">Vuelos</a>
                </nav>
            </>
    );
};

export default Tarjetas;