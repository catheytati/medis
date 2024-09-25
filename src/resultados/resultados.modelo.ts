import * as mongoose from 'mongoose';
import { TipoDeResultado } from './enums/tipo-de-resultado.enum'; // Importa el enum si está en un archivo separado
import { IPaciente } from 'src/paciente/paciente.modelo'; // Importa la interfaz IPaciente
import { IOrden_Laboratorio } from 'src/orden_laboratorio/orden_laboratorio.modelo';
import { IProcedimientos } from 'src/procedimientos/procedimientos.modelo';
import { IPruebas } from 'src/pruebas/pruebas.modelo';
import { IPruebasOpciones } from 'src/pruebasopciones/pruebasopciones.modelo';


// Definición del esquema para Resultados
export const ResultadosSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // ID del resultado
  Fecha_resultado: { type: Date, required: true }, // Fecha del resultado
  Num_procesamiento: { type: String, required: true }, // Número de procesamiento
  Tipo_de_resultado: { 
    type: String, 
    enum: Object.values(TipoDeResultado), // Asegura que solo se permitan los valores del enum
    required: true,
  },
  Paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente", required: true }, // Referencia a la colección Paciente
  id_orden: { type: mongoose.Schema.Types.ObjectId, ref: "OrdenLaboratorio", required: true }, // Referencia a la orden de laboratorio
  id_procedimiento: { type: mongoose.Schema.Types.ObjectId, ref: "Procedimiento", required: true }, // Referencia al procedimiento
  id_prueba: { type: mongoose.Schema.Types.ObjectId, ref: "Prueba", required: true }, // Referencia a la prueba
  id_pruebasopciones: { type: mongoose.Schema.Types.ObjectId, ref: "PruebasOpciones", required: true }, // Referencia a las opciones de prueba
  res_opcion: { type: String, required: false }, // Resultado como opción
  res_numerico: { type: Number, required: false }, // Resultado numérico
  res_texto: { type: String, required: false }, // Resultado en texto
  res_memo: { type: String, required: false }, // Resultado en forma de memo
  num_procesamientos: { type: Number, required: true }, // Número de procesamientos
});

// Interfaz para Resultados
export interface IResultados extends mongoose.Document {
  id: number; // ID del resultado
  Fecha_resultado: Date; // Fecha del resultado
  Num_procesamiento: string; // Número de procesamiento
  Tipo_de_resultado: TipoDeResultado; // Tipo de resultado
  Paciente: IPaciente; // Referencia al modelo de Paciente
  id_orden: IOrden_Laboratorio; // Referencia a la orden de laboratorio
  id_procedimiento: IProcedimientos; // Referencia al procedimiento
  id_prueba: IPruebas; // Referencia a la prueba
  id_pruebasopciones: IPruebasOpciones; // Referencia a las opciones de prueba
  res_opcion?: string; // Resultado como opción (opcional)
  res_numerico?: number; // Resultado numérico (opcional)
  res_texto?: string; // Resultado en texto (opcional)
  res_memo?: string; // Resultado en forma de memo (opcional)
  num_procesamientos: number; // Número total de procesamientos
}
