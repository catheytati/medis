import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IListaOpcion } from './listaopcion.modelo';
import { ListaOpcionDto } from './listaopcion.dto';

@Injectable()
export class ListaOpcionService {
  constructor(@InjectModel('ListaOpcion') private listaOpcionModel: Model<IListaOpcion>) {}

  async crearListaOpcion(listaOpcion: ListaOpcionDto): Promise<IListaOpcion> {
    const nuevaOpcion = new this.listaOpcionModel(listaOpcion);
    return await nuevaOpcion.save();
  }

  async buscarPorId(id: number): Promise<IListaOpcion> {
    try {
      return await this.listaOpcionModel.findOne({ id }).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async buscarTodos(): Promise<IListaOpcion[]> {
    return await this.listaOpcionModel.find().exec();
  }

  async eliminarListaOpcion(id: number): Promise<any> {
    const respuesta = await this.listaOpcionModel.deleteOne({ id }).exec();
    return respuesta.deletedCount === 1 ? respuesta : null;
  }

  async actualizarListaOpcion(id: number, listaOpcionDto: ListaOpcionDto): Promise<IListaOpcion> {
    try {
      return await this.listaOpcionModel.findOneAndUpdate(
        { id },
        listaOpcionDto,
        { new: true }
      ).exec();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
