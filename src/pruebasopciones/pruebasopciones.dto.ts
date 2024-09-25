import { IPruebas } from "src/pruebas/pruebas.modelo";

export class PruebasOpcionesDto {
    id: number;
    id_prueba: IPruebas;
    opcion: string; // Caracter
    valor_ref_min_f: number;
    valor_ref_max_f: number;
    valor_ref_min_m: number;
    valor_ref_max_m: number;
}
