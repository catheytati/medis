import mongoose from 'mongoose';
import { ICups } from 'src/cups/cups.modelo';
import { IGrupo } from 'src/grupos/grupos.modelo';

export const ProcedimientosSchema = new mongoose.Schema({
    id: Number,
    id_cups: { type: mongoose.Schema.Types.ObjectId, ref: 'Cups' },
    id_grupolaboratorio: { type: mongoose.Schema.Types.ObjectId, ref: 'GruposLaboratorio' },
    metodo: String,
});

export interface IProcedimientos extends mongoose.Document {
    id: number;
    id_cups: ICups;
    id_grupolaboratorio: IGrupo;
    metodo: string;
}
