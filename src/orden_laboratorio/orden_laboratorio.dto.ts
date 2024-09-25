import { IDocumento } from "src/documento/documento.modelo";
import { IPaciente } from "src/paciente/paciente.modelo";
import { IProfesional } from "src/profesional/profesional.modelo";
import { ITarjetero } from "src/tarjetero/tarjetero.modelo";

export class Orden_LaboratorioDto {
    id: number;
    id_documento:IDocumento;
    Orden:string; 
    Fecha_orden: Date;
    id_historia:ITarjetero;
    id_Paciente:IPaciente;
    id_Profesional:IProfesional;
    Profesional_externo:boolean
}
