import mongoose, { Document } from 'mongoose';

// Define el esquema para Eps
export const EpsSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  codigo: { type: String, required: true },
  razon_social: { type: String, required: true },
  nit: { type: String, required: true },
  habilita: { type: Boolean, required: true },
});

// Define la interfaz para Eps
export interface IEps extends Document {
  id: number;
  codigo: string;
  razon_social: string;
  nit: string;
  habilita: boolean;
}
