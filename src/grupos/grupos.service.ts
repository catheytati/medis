import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGrupo } from './grupos.modelo';
import { GruposDto } from './grupos.dto';

@Injectable()
export class GruposService {
    constructor(@InjectModel('Grupo') private grupoModel: Model<IGrupo>) {}

  async CrearGrupo(grupo: GruposDto): Promise<IGrupo> {
    const creacion = new this.grupoModel(grupo);
    return await creacion.save();
  }

  async BuscarPorCodigo(codigo: string): Promise<IGrupo> {
    try {
      const grupoEncontrado = await this.grupoModel.findOne({ codigo }).exec();
      return grupoEncontrado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async BuscarTodos(): Promise<IGrupo[]> {
    return await this.grupoModel.find().exec();
  }

  async EliminarGrupo(codigo: string): Promise<any> {
    const respuesta = await this.grupoModel.deleteOne({ codigo }).exec();
    return respuesta.deletedCount === 1 ? respuesta : null;
  }

  async ActualizarGrupo(codigo: string, grupoDto: GruposDto): Promise<IGrupo> {
    try {
      const grupoActualizado = await this.grupoModel.findOneAndUpdate(
        { codigo },
        grupoDto,
        { new: true }
      ).exec();
      return grupoActualizado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
