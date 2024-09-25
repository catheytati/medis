import { ISexoBiologico } from "src/sexobiologico/sexobiologico.modelo";

export class PacienteDto{
    id:Number;
    Tipo_identificacion:string;
    Num_identificacion:string;
    apellido_uno:string;
    apellido_dos:string;
    Nombre_uno:string;
    Nombre_dos:string;
    Fecha_nacimiento:string;
    id_Sexo_biologico:ISexoBiologico;
    Direccion:string;
    Telefono:string;
    Correo_electronico:string;
}