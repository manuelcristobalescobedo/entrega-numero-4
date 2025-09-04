/* Importamos toda la información necesaria... */
import React from "react";
import "../App.css";
import TarjetaInformacion from "./TarjetaInformacion";

/* para crear una función... */
const SeccionInformacion: React.FC = () => {
    /* que contenga un arreglo con los datos que vamos a reproducir */
    const tarjetas = [
        {
            titulo: "Actividades en todo Chile",
            descripcion: "Disfruta de cientos de actividades a lo largo del país",
        },
        {
            titulo: "Atención al cliente 24/7",
            descripcion: "Gestiona tu reserva y resuelve dudas en todo momento",
        },
        {
            titulo: "Confirmación inmediata",
            descripcion: "Recibe un correo confirmando tu pago y reserva de la actividad",
        },
    ];

    /* Retornamos una sección... */
    return (
        <section className="informacion">
            {/* con un bucle que recorre el arreglo... */}
            {tarjetas.map((tarjeta, index) => (
                // y por cada elemento en él, reproduce un componente
                <TarjetaInformacion key={index} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion}/>
            ))}
        </section>
    );
};

/* Para terminar, exportamos la sección */
export default SeccionInformacion;