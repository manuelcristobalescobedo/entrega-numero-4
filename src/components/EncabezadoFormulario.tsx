import React from "react";
import "../App.css";

const EncabezadoFormulario: React.FC = () => {
    return (
        <>
            <form className="encabezado-formulario">
                <input className="encabezado-buscar" id="buscar" type="search" placeholder="¿A dónde vamos?"></input>
                <button className="encabezado-enviar" id="enviar" type="submit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 13.5C9.88889 13.5 11.0694 13.0139 12.0417 12.0417C13.0139 11.0694 13.5 9.88889 13.5 8.5C13.5 7.11111 13.0139 5.93056 12.0417 4.95833C11.0694 3.98611 9.88889 3.5 8.5 3.5C7.11111 3.5 5.93056 3.98611 4.95833 4.95833C3.98611 5.93056 3.5 7.11111 3.5 8.5C3.5 9.88889 3.98611 11.0694 4.95833 12.0417C5.93056 13.0139 7.11111 13.5 8.5 13.5ZM8.50708 15C6.69056 15 5.15188 14.3681 3.89104 13.1042C2.63035 11.8403 2 10.3056 2 8.5C2 6.69444 2.63194 5.15972 3.89583 3.89583C5.15972 2.63194 6.69444 2 8.5 2C10.3056 2 11.8403 2.63035 13.1042 3.89104C14.3681 5.15188 15 6.69056 15 8.50708C15 9.26625 14.8785 9.98958 14.6354 10.6771C14.3924 11.3646 14.0486 11.9861 13.6042 12.5417L18 16.9375L16.9375 18L12.5417 13.6042C11.9861 14.0486 11.3646 14.3924 10.6771 14.6354C9.98958 14.8785 9.26625 15 8.50708 15Z" fill="currentColor"/>
                    </svg>
                </button>
            </form>
        </>
    );
};

export default EncabezadoFormulario;