import mongoose from "mongoose";

export const PacienteSchema=new mongoose.Schema(
    {
        Tipo_identificacion:String,
        Num_identificacion:String,
        Nombre_completo:String,
        Fecha_nacimiento:String,
        Sexo_biologico:String,
        Direccion:String,
        Municipio_res:String,
        Telefono:String,
        Correo_electronico:String,
    }
)

export interface IPaciente extends mongoose.Document{
    Tipo_identificacion:string;
    Num_identificacion:string;
    Nombre_completo:string;
    Fecha_nacimiento:string;
    Sexo_biologico:string;
    Direccion:string;
    Municipio_res:string;
    Telefono:string;
    Correo_electronico:string;
}