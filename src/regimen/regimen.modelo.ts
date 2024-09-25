import mongoose from "mongoose";

export const RegimenSchema = new mongoose.Schema(
    {
        id: Number,
        tipo_regimen: String,
    }
);

export interface IRegimen extends mongoose.Document {
    id: number;
    tipo_regimen: string;
}
