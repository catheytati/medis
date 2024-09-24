import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPaciente } from './paciente.modelo';
import { PacienteDto } from './paciente.dto';

@Injectable()
export class PacienteService {
    constructor(@InjectModel('Paciente') private pacienteModel: Model<IPaciente>) {}

  pruebaInicialGet(): string {
    return 'Este es el Get';
  }

  // METODO PARA CREAR PACIENTE
  async CrearPaciente(paciente: PacienteDto): Promise<IPaciente> {
    const creacion = new this.pacienteModel(paciente);
    return await creacion.save();
  }

  // METODO PARA BUSCAR UN PACIENTE POR CEDULA
  async BuscarCedula(cedula: string): Promise<IPaciente> {
    try {
      const pacienteEncontrado = await this.pacienteModel.findOne({ Num_identificacion: cedula }).exec();
      return pacienteEncontrado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // METODO PARA BUSCAR TODOS LOS PACIENTES
  async BuscarTodo(): Promise<IPaciente[]> {
    return await this.pacienteModel.find().exec();
  }

  // METODO PARA ELIMINAR TODOS LOS PACIENTES
  async EliminarPaciente(cedula: string): Promise<any> {
      const respuesta = await this.pacienteModel.deleteOne({ Num_identificacion: cedula }).exec()
      if (respuesta.deletedCount===1){
        return respuesta
      }else null
    }
    
  // Método para actualizar un paciente
  async ActualizarPaciente(cedula: string, pacienteDto: PacienteDto): Promise<IPaciente> {
    try {
      const pacienteActualizado = await this.pacienteModel.findOneAndUpdate(
        { Num_identificacion: cedula },
        pacienteDto,
        { new: true } // Retorna el documento actualizado7

        
      ).exec();
      return pacienteActualizado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
