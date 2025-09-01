export interface Servicio {
    id: number;
    imagen: string;
    titulo: string;
    precio: string;
    calificacion: number;
    opiniones: number;
    esNuevo?: boolean;
}