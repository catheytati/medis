import mongoose from 'mongoose';
import { IPruebas } from 'src/pruebas/pruebas.modelo';

export const PruebasOpcionesSchema = new mongoose.Schema({
    id: Number,
    id_prueba: { type: mongoose.Schema.Types.ObjectId, ref: 'Pruebas' },
    opcion: String, // Caracter
    valor_ref_min_f: Number,
    valor_ref_max_f: Number,
    valor_ref_min_m: Number,
    valor_ref_max_m: Number,
});

export interface IPruebasOpciones extends mongoose.Document {
    id: number;
    id_prueba: IPruebas;
    opcion: string;
    valor_ref_min_f: number;
    valor_ref_max_f: number;
    valor_ref_min_m: number;
    valor_ref_max_m: number;
}