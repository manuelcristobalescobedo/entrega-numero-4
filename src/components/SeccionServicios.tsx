import React from "react";
import TarjetaServicio from "./TarjetaServicio";
import type { Servicio } from "../types/Servicio";

const servicios: Servicio[] = [
  {
    id: 1,
    imagen: "/photos/foto1.jpg",
    titulo: "Recorrido por Iglesia de Parinacota",
    precio: "desde $18.900 por adulto",
    calificacion: 4.7,
    opiniones: 432,
    esNuevo: true,
  },
  {
    id: 2,
    imagen: "/photos/foto2.jpg",
    titulo: "Paseo en bote por Lago Chungará",
    precio: "desde $39.990 por adulto",
    calificacion: 4.8,
    opiniones: 1.120,
  },
  {
    id: 3,
    imagen: "/photos/foto3.jpg",
    titulo: "Caminata en Lagunas de Cotacotani",
    precio: "desde $25.500 por adulto",
    calificacion: 4.6,
    opiniones: 678,
  },
  {
    id: 4,
    imagen: "/photos/foto4.jpg",
    titulo: "Visita a Salar de Surire",
    precio: "desde $52.900 por adulto",
    calificacion: 4.9,
    opiniones: 854,
  },
  {
    id: 4,
    imagen: "/photos/foto5.jpg",
    titulo: "Trekking en Altiplano de Pailcoaillo",
    precio: "desde $34.700 por adulto",
    calificacion: 4.5,
    opiniones: 297,
  },
  {
    id: 4,
    imagen: "/photos/foto6.jpg",
    titulo: "Recorrido por Cuevas de Anzota",
    precio: "desde $21.990 por adulto",
    calificacion: 4.6,
    opiniones: 1.045,
  },
];

const SeccionServicios: React.FC = () => {
  return (
    <section className="servicios-contenedor">
      <div className="servicios-cuadricula">
        {servicios.map((servicio) => (
          <TarjetaServicio key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </section>
  );
};

export default SeccionServicios;