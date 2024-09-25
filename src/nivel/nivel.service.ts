import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INivel } from './nivel.modelo';
import { NivelDto } from './nivel.dto';

@Injectable()
export class NivelService {
  constructor(@InjectModel('Nivel') private nivelModel: Model<INivel>) {}

  async CrearNivel(nivel: NivelDto): Promise<INivel> {
    const nuevoNivel = new this.nivelModel(nivel);
    return await nuevoNivel.save();
  }

  async buscarPorId(id: number): Promise<INivel> {
    try {
      return await this.nivelModel.findOne({ id }).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async buscarTodos(): Promise<INivel[]> {
    return await this.nivelModel.find().exec();
  }

  async eliminarNivel(id: number): Promise<any> {
    const respuesta = await this.nivelModel.deleteOne({ id }).exec();
    return respuesta.deletedCount === 1 ? respuesta : null;
  }

  async actualizarNivel(id: number, nivelDto: NivelDto): Promise<INivel> {
    try {
      return await this.nivelModel.findOneAndUpdate(
        { id },
        nivelDto,
        { new: true }
      ).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
