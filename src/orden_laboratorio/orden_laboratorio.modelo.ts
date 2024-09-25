import mongoose from "mongoose";
import { IDocumento } from "src/documento/documento.modelo";
import { IPaciente } from "src/paciente/paciente.modelo";
import { IProfesional } from "src/profesional/profesional.modelo";
import { ITarjetero } from "src/tarjetero/tarjetero.modelo";

// Definición del esquema para Orden_Laboratorio
export const OrdenLaboratorioSchema = new mongoose.Schema({
    id:Number,
    id_documento: { type: mongoose.Schema.Types.ObjectId, ref: "Documento", required: true }, // Asegúrate de que "Documento" sea el nombre correcto del modelo
    Orden: { type: String, required: true },
    Fecha_orden: { type: Date, required: true },
    id_historia: { type: mongoose.Schema.Types.ObjectId, ref: "Tarjetero", required: true },
    id_Paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente", required: true },
    id_Profesional: { type: mongoose.Schema.Types.ObjectId, ref: "Profesional", required: true },
    Profesional_externo: { type: Boolean, required: true },
});

// Interfaz para la entidad Orden_Laboratorio
export interface IOrden_Laboratorio extends mongoose.Document {
    id: number; // Se puede omitir ya que Mongoose maneja el _id automáticamente
    id_documento: IDocumento; // Asegúrate de que esta interfaz esté definida en alguna parte
    Orden: string; 
    Fecha_orden: Date;
    id_historia: ITarjetero;
    id_Paciente: IPaciente;
    id_Profesional: IProfesional;
    Profesional_externo: boolean;
}

