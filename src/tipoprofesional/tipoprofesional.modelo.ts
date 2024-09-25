import mongoose from "mongoose";

export const TipoProfesionalSchema = new mongoose.Schema({
    tipo_profesional: { type: String, required: true },
});

export interface ITipoProfesional extends mongoose.Document {
    id: number;
    tipo_profesional: string; // Puede ser "medico especialista", "medico general", "medico internista", "familiar", etc.
}
