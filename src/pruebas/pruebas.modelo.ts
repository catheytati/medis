import mongoose from 'mongoose';
import { IProcedimientos } from 'src/procedimientos/procedimientos.modelo';
import { IResultados } from 'src/resultados/resultados.modelo';

export const PruebasSchema = new mongoose.Schema({
    id: Number,
    id_procedimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Procedimiento' },
    codigo_prueba: String,
    nombre_prueba: String,
    id_tiporesultado: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoResultado' },
    unidad: String,
    habilita: Boolean,
});

export interface IPruebas extends mongoose.Document {
    id: number;
    id_procedimiento: IProcedimientos;
    codigo_prueba: string;
    nombre_prueba: string;
    id_tiporesultado: IResultados;
    unidad: string;
    habilita: boolean;
}
