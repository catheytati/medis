import mongoose, { Document } from 'mongoose';

// Define el esquema para ListaOpcion
export const ListaOpcionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  variable: { type: String, required: true },
  descripcion: { type: String, required: true },
  valor: { type: Number, required: true },
  nombre: { type: String, required: true },
  abreviacion: { type: String, required: true },
  habilita: { type: Boolean, required: true },
});

// Define la interfaz para ListaOpcion
export interface IListaOpcion extends Document {
  id: number;
  variable: string;
  descripcion: string;
  valor: number;
  nombre: string;
  abreviacion: string;
  habilita: boolean;
}
