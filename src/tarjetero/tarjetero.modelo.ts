import mongoose, { Document } from 'mongoose';
import { IEps } from 'src/eps/eps.modelo';
import { INivel } from 'src/nivel/nivel.modelo';
import { IPaciente } from 'src/paciente/paciente.modelo';
import { IRegimen } from 'src/regimen/regimen.modelo';

// Define el esquema para Tarjetero
export const TarjeteroSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  historia: { type: String, required: true },
  id_paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  id_regimen: { type: mongoose.Schema.Types.ObjectId, ref: 'Regimen', required: true },
  id_eps: { type: mongoose.Schema.Types.ObjectId, ref: 'Eps', required: true },
  id_nivel: { type: mongoose.Schema.Types.ObjectId, ref: 'Nivel', required: true },
});

// Define la interfaz para Tarjetero
export interface ITarjetero extends Document {
  id: number;
  historia: string;
  id_paciente: IPaciente; // Referencia a la interfaz de Paciente
  id_regimen: IRegimen; // Puedes definir esto más tarde
  id_eps: IEps; // Puedes definir esto más tarde
  id_nivel: INivel; // Puedes definir esto más tarde
}
