import mongoose from "mongoose";

export const SexoBiologicoSchema = new mongoose.Schema(
    {
        tipo_sexobiologico: { type: String, enum: ['femenino', 'masculino', 'otro'], required: true },
    }
);

export interface ISexoBiologico extends mongoose.Document {
    tipo_sexobiologico: string;
}
