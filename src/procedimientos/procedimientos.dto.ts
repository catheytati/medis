import { ICups } from "src/cups/cups.modelo";
import { IGrupo } from "src/grupos/grupos.modelo";

export class ProcedimientosDto {
    id: number;
    id_cups: ICups;
    id_grupolaboratorio: IGrupo;
    metodo: string;
}
