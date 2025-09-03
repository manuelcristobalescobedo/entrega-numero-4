import React from "react";
import type { Servicio } from "../types/Servicio";

interface Props {
  servicio: Servicio;
}

const TarjetaServicio: React.FC<Props> = ({ servicio }) => {
  return (
    <div className="tarjeta-servicio">
      <div className="imagen-wrapper">
        <img src={servicio.imagen} alt={servicio.titulo} />

        <button className="favorito-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00026 14.0171L7.39776 13.4722C6.30376 12.4919 5.40098 11.6554 4.68943 10.9627C3.97787 10.2699 3.41909 9.65922 3.01309 9.13055C2.60709 8.602 2.3257 8.12272 2.16893 7.69272C2.01204 7.26283 1.93359 6.82611 1.93359 6.38255C1.93359 5.492 2.24148 4.73877 2.85726 4.12289C3.47315 3.50711 4.22637 3.19922 5.11693 3.19922C5.66559 3.19922 6.19337 3.32977 6.70026 3.59089C7.20715 3.852 7.64048 4.22572 8.00026 4.71205C8.36004 4.22572 8.79337 3.852 9.30026 3.59089C9.80715 3.32977 10.3349 3.19922 10.8836 3.19922C11.7741 3.19922 12.5274 3.50711 13.1433 4.12289C13.759 4.73877 14.0669 5.492 14.0669 6.38255C14.0669 6.82611 13.9913 7.25727 13.8399 7.67605C13.6887 8.09494 13.4101 8.56589 13.0041 9.08889C12.5981 9.612 12.0376 10.2255 11.3226 10.9294C10.6077 11.6332 9.68998 12.4919 8.56943 13.5056L8.00026 14.0171Z"/>
                </svg>
        </button>

        {servicio.esNuevo && <span className="nuevo-tag">Nuevo</span>}
      </div>

      <div className="info-servicio">
        <p className="nombre-servicio">{servicio.titulo}</p>
        <p className="precio-servicio">{servicio.precio}</p>

        <p className="calificacion-servicio">
          {servicio.calificacion}
          <span className="estrellas">★★★★★</span>
          ({servicio.opiniones})
        </p>
      </div>
    </div>
  );
};

export default TarjetaServicio;