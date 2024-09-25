import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITarjetero } from './tarjetero.modelo';
import { TarjeteroDto } from './tarjetero.dto';

@Injectable()
export class TarjeteroService {
  constructor(@InjectModel('Tarjetero') private tarjeteroModel: Model<ITarjetero>) {}

  async crearTarjetero(tarjetero: TarjeteroDto): Promise<ITarjetero> {
    const nuevaTarjeta = new this.tarjeteroModel(tarjetero);
    return await nuevaTarjeta.save();
  }

  async buscarPorId(id: number): Promise<ITarjetero> {
    try {
      return await this.tarjeteroModel.findOne({ id }).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async buscarTodos(): Promise<ITarjetero[]> {
    return await this.tarjeteroModel.find().exec();
  }

  async eliminarTarjetero(id: number): Promise<any> {
    const respuesta = await this.tarjeteroModel.deleteOne({ id }).exec();
    return respuesta.deletedCount === 1 ? respuesta : null;
  }

  async actualizarTarjetero(id: number, tarjeteroDto: TarjeteroDto): Promise<ITarjetero> {
    try {
      return await this.tarjeteroModel.findOneAndUpdate(
        { id },
        tarjeteroDto,
        { new: true }
      ).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
