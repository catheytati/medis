import { IPaciente } from "src/paciente/paciente.modelo";
import { ITipoProfesional } from "src/tipoprofesional/tipoprofesional.modelo";

export class ProfesionalDto {
    id:number;
    codigo:string;
    id_paciente:IPaciente
    registroMedico: string;
    id_tipoprofesional:ITipoProfesional
}