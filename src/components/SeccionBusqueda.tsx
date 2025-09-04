import React from "react";
import "../App.css";
import Tarjetas from "./Tarjetas";
import EncabezadoFormulario from "./EncabezadoFormulario";


const SeccionBusqueda: React.FC = () => {
    return (
        <>
            <section className="busqueda">
                <Tarjetas />
                <EncabezadoFormulario />
            </section>
        </>
    )
};

export default SeccionBusqueda;