import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPruebas } from './pruebas.modelo';
import { PruebasDto } from './pruebas.dto';

@Injectable()
export class PruebasService {
    constructor(@InjectModel('Pruebas') private pruebasModel: Model<IPruebas>) {}

    // Crear Prueba
    async crearPrueba(pruebas: PruebasDto): Promise<IPruebas> {
        const creacion = new this.pruebasModel(pruebas);
        return await creacion.save();
    }

    // Buscar Prueba por ID
    async buscarPorId(id: string): Promise<IPruebas> {
        return await this.pruebasModel.findById(id).exec();
    }

    // Buscar todas las Pruebas
    async buscarTodas(): Promise<IPruebas[]> {
        return await this.pruebasModel.find().exec();
    }

    // Eliminar Prueba
    async eliminarPrueba(id: string): Promise<any> {
        const respuesta = await this.pruebasModel.deleteOne({ _id: id }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        }
        return null;
    }

    // Actualizar Prueba
    async actualizarPrueba(id: string, pruebasDto: PruebasDto): Promise<IPruebas> {
        return await this.pruebasModel.findByIdAndUpdate(id, pruebasDto, { new: true }).exec();
    }
}
