import mongoose from "mongoose";

export const CupsSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    habilita: { type: Boolean, required: true },
});

export interface ICups extends mongoose.Document {
    id: number;
    codigo: string;
    nombre: string;
    habilita: boolean;
}