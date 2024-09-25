import { IProcedimientos } from "src/procedimientos/procedimientos.modelo";
import { IResultados } from "src/resultados/resultados.modelo";

export class PruebasDto {
    id: number;
    id_procedimiento: IProcedimientos;
    codigo_prueba: string;
    nombre_prueba: string;
    id_tiporesultado: IResultados;
    unidad: string;
    habilita: boolean;
}
