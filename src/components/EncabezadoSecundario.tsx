import React from "react";
import "../App.css";

const EncabezadoSecundario: React.FC = () => {

    return (
        <>
            <div className="encabezado-secundario">
                <button className="encabezado-registrarse">Registrarse</button>
                <button className="encabezado-ingresar">Ingresar</button>
            </div> 
        </>
    );
};

export default EncabezadoSecundario