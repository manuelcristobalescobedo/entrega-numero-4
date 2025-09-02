import React from "react";
import "/home/eeriepoisonous/entrega-numero-4/src/App.css";


const SeccionInformacion: React.FC = () => {

return (
        <>
            <section className="SeccionInformacion"></section>

            <div className = "Container">
                <div className="InformacionRow">
                    <h3>Actividades en todo Chile</h3>
                    <p>Disfruta de cientos de actividades a lo largo del pais</p>
                </div>
                <div>
                    <h3>Atencion al cliente 24/7</h3>
                    <p>Gestiona tu reserva y resuelve dudas en todo momento</p>
                </div>
                <div>
                    <h3>Confirmación inmediata</h3>
                    <p>Recibe un correo confirmando tu pago y reserva de la actividad</p>
                </div>
            </div>
        </>
        )
    };

export default SeccionInformacion;