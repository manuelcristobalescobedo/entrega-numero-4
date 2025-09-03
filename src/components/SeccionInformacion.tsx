import React from "react";
import "../App.css";


const SeccionInformacion: React.FC = () => {

return (
        <>
            <section className="informacion">
                <div className="informacion-tarjeta">
                    <h3>Actividades en todo Chile</h3>
                    <p>Disfruta de cientos de actividades a lo largo del pais</p>
                </div>
                <div className="informacion-tarjeta">
                    <h3>Atencion al cliente 24/7</h3>
                    <p>Gestiona tu reserva y resuelve dudas en todo momento</p>
                </div>
                <div className="informacion-tarjeta">
                    <h3>Confirmación inmediata</h3>
                    <p>Recibe un correo confirmando tu pago y reserva de la actividad</p>
                </div>
            </section>
        </>
        )
    };

export default SeccionInformacion;