import * as mongoose from "mongoose";
import { IPaciente } from "src/paciente/paciente.modelo";
import { ITipoProfesional } from "src/tipoprofesional/tipoprofesional.modelo";

export const ProfesionalSchema = new mongoose.Schema({
    id:Number,
    codigo:String,
    id_Paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente", required: true },
    registroMedico: String,
    id_tipoprofesional:{ type: mongoose.Schema.Types.ObjectId, ref: "tipoprofesional", required: true }
});

export interface IProfesional extends mongoose.Document {
    id:number;
    codigo:string;
    id_paciente:IPaciente
    registroMedico: string;
    id_tipoprofesional:ITipoProfesional
}
