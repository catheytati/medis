import mongoose from "mongoose";
import { ISexoBiologico } from "src/sexobiologico/sexobiologico.modelo";

export const PacienteSchema=new mongoose.Schema(
    {
        id:Number,
        Tipo_identificacion:String,
        Num_identificacion:String,
        apellido_uno:String,
        apellido_dos:String,
        Nombre_uno:String,
        Nombre_dos:String,
        Fecha_nacimiento:String,
        id_Sexo_biologico:String,
        Direccion:String,
        Telefono:String,
        Correo_electronico:String,
    }
)

export interface IPaciente extends mongoose.Document{
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