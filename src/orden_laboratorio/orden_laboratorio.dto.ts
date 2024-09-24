import { IPaciente } from "src/paciente/paciente.modelo";
import { IProfesional } from "src/profesional/profesional.modelo";

export class Orden_LaboratorioDto {
    Fecha_orden: Date;
    Codigo_orden: string;
    Numero_orden: string;
    Paciente:IPaciente;
    Profesional:IProfesional
}
