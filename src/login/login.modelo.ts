import mongoose from "mongoose";

export const LoginSchema = new mongoose.Schema({
  Tipo_identificacion: { type: String, required: true },
  Num_identificacion: { type: String, required: true, unique: true },
  Fecha_nacimiento: { type: String, required: true },
});

export interface ILogin extends mongoose.Document {
  Tipo_identificacion: string;
  Num_identificacion: string;
  Fecha_nacimiento: string;
}
