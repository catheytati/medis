import * as mongoose from "mongoose";

export const ProfesionalSchema = new mongoose.Schema({
    registroMedico: { type: String, required: true },
    nombre: { type: String, required: true },
});

export interface IProfesional extends mongoose.Document {
    registroMedico: string;
    nombre: string;
}
