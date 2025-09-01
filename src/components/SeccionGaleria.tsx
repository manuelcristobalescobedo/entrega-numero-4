import React from "react";
import TarjetaServicio from "./TarjetaServicio";
import type { Servicio } from "../types/Servicio";

const servicios: Servicio[] = [
  {
    id: 1,
    imagen: "/photos/foto1.jpg",
    titulo: "Avistamiento de fauna en Yellowstone",
    precio: "desde $85 por adulto",
    calificacion: 4.6,
    opiniones: 1325,
    esNuevo: true,
  },
  {
    id: 2,
    imagen: "/photos/foto2.jpg",
    titulo: "Kayak en el Lago Tahoe",
    precio: "desde $120 por adulto",
    calificacion: 4.8,
    opiniones: 980,
  },
  {
    id: 2,
    imagen: "/photos/foto3.jpg",
    titulo: "Kayak en el Lago Tahoe",
    precio: "desde $120 por adulto",
    calificacion: 4.8,
    opiniones: 980,
  },
  {
    id: 2,
    imagen: "/photos/foto4.jpg",
    titulo: "Kayak en el Lago Tahoe",
    precio: "desde $120 por adulto",
    calificacion: 4.8,
    opiniones: 980,
  },
];

const SeccionGaleria: React.FC = () => {
  return (
    <section className="seccion-galeria">
      <div className="grid-galeria">
        {servicios.map((servicio) => (
          <TarjetaServicio key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </section>
  );
};

export default SeccionGaleria;