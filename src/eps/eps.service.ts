import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEps } from './eps.modelo';
import { EpsDto } from './eps.dto';

@Injectable()
export class EpsService {
  constructor(@InjectModel('Eps') private epsModel: Model<IEps>) {}

  async crearEps(eps: EpsDto): Promise<IEps> {
    const nuevaEps = new this.epsModel(eps);
    return await nuevaEps.save();
  }

  async buscarPorId(id: number): Promise<IEps> {
    try {
      return await this.epsModel.findOne({ id }).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async buscarTodos(): Promise<IEps[]> {
    return await this.epsModel.find().exec();
  }

  async eliminarEps(id: number): Promise<any> {
    const respuesta = await this.epsModel.deleteOne({ id }).exec();
    return respuesta.deletedCount === 1 ? respuesta : null;
  }

  async actualizarEps(id: number, epsDto: EpsDto): Promise<IEps> {
    try {
      return await this.epsModel.findOneAndUpdate(
        { id },
        epsDto,
        { new: true }
      ).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
