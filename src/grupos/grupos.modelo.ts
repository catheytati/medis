import mongoose from 'mongoose';

export const GrupoSchema = new mongoose.Schema({
  id: Number,
  codigo: String,
  nombre: String,
  habilita: Boolean,
});

export interface IGrupo extends mongoose.Document {
  id: number;
  codigo: string;
  nombre: string;
  habilita: boolean;
}