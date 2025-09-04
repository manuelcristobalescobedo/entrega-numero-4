/* Importamos toda la información necesaria... */
import React from "react";

/* para definir los tipos de datos... */
interface TarjetaInformacionProps {
    titulo: string;
    descripcion: string;
}

/* que puede reproducir un componente */
const TarjetaInformacion: React.FC<TarjetaInformacionProps> = ({ titulo, descripcion }) => {
    /* Retornamos un componente... */
    return (
        <div className="informacion-tarjeta">
            {/* que reproduce datos contenidos en un arreglo... */}
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </div>
    );
};

/* Para terminar, exportamos el componente */
export default TarjetaInformacion;