import mongoose, { Document } from 'mongoose';
import { IEps } from 'src/eps/eps.modelo';
import { IRegimen } from 'src/regimen/regimen.modelo';

// Define el esquema para Nivel
export const NivelSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  id_eps: { type: mongoose.Schema.Types.ObjectId, ref: 'Eps', required: true },
  nivel: { type: String, required: true },
  nombre: { type: String, required: true },
  id_regimen: { type: mongoose.Schema.Types.ObjectId, ref: 'Regimen', required: true },
});

// Define la interfaz para Nivel
export interface INivel extends Document {
  id: number;
  id_eps: IEps;
  nivel: string;
  nombre: string;
  id_regimen: IRegimen;
}
