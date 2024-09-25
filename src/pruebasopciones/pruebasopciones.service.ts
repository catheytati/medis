import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPruebasOpciones } from './pruebasopciones.modelo';
import { PruebasOpcionesDto } from './pruebasopciones.dto';

@Injectable()
export class PruebasOpcionesService {
    constructor(@InjectModel('PruebasOpciones') private pruebasOpcionesModel: Model<IPruebasOpciones>) {}

    // Crear opción de prueba
    async crearPruebaOpcion(pruebasOpciones: PruebasOpcionesDto): Promise<IPruebasOpciones> {
        const creacion = new this.pruebasOpcionesModel(pruebasOpciones);
        return await creacion.save();
    }

    // Buscar opción de prueba por ID
    async buscarPorId(id: string): Promise<IPruebasOpciones> {
        return await this.pruebasOpcionesModel.findById(id).exec();
    }

    // Buscar todas las opciones de prueba
    async buscarTodas(): Promise<IPruebasOpciones[]> {
        return await this.pruebasOpcionesModel.find().exec();
    }

    // Eliminar opción de prueba
    async eliminarPruebaOpcion(id: string): Promise<any> {
        const respuesta = await this.pruebasOpcionesModel.deleteOne({ _id: id }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        }
        return null;
    }

    // Actualizar opción de prueba
    async actualizarPruebaOpcion(id: string, pruebasOpcionesDto: PruebasOpcionesDto): Promise<IPruebasOpciones> {
        return await this.pruebasOpcionesModel.findByIdAndUpdate(id, pruebasOpcionesDto, { new: true }).exec();
    }
}
