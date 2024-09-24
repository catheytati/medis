import mongoose, { Mongoose } from "mongoose";
import { IPaciente } from "src/paciente/paciente.modelo";
import { IProfesional } from "src/profesional/profesional.modelo";

export const Orden_LaboratorioSchema = new mongoose.Schema({
    Fecha_orden: { type: Date, required: true },
    Codigo_orden: { type: String, required: true },
    Numero_orden: { type: String, required: true },
    Paciente:{type: mongoose.SchemaTypes.ObjectId, ref:"Paciente"},
    Profesional:{type: mongoose.SchemaTypes.ObjectId, ref:"Profesional"}
});

export interface IOrden_Laboratorio extends mongoose.Document {
    Fecha_orden: Date;
    Codigo_orden: string
    Numero_orden: string
    Paciente:IPaciente
    Profesional:IProfesional
}
