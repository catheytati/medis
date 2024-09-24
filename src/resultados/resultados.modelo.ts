import * as mongoose from 'mongoose';
import { TipoDeResultado } from './enums/tipo-de-resultado.enum';  // Importa el enum si está en un archivo separado
import { IPaciente } from 'src/paciente/paciente.modelo';

// Definición del esquema para Resultados
export const ResultadosSchema = new mongoose.Schema({
  Fecha_resultado: { type: Date, required: true },
  Num_procesamiento: { type: String, required: true },
  Tipo_de_resultado: { 
    type: String, 
    enum: Object.values(TipoDeResultado),  // Asegura que solo se permitan los valores del enum
    required: true,
  },
  Paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente" }  // Referencia a la colección Paciente
});

// Interfaz para Resultados
export interface IResultados extends mongoose.Document {
  Fecha_resultado: Date;
  Num_procesamiento: string;
  Tipo_de_resultado: TipoDeResultado;  // Nuevo campo
  Paciente: IPaciente;  // Referencia al modelo de Paciente
}
