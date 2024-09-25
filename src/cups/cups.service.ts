import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICups } from './cups.modelo';
import { CupsDto } from './cups.dto';

@Injectable()
export class CupsService {
    constructor(@InjectModel('Cups') private cupsModel: Model<ICups>) {}

    // Método para crear CUPS
    async crearCups(cups: CupsDto): Promise<ICups> {
        const creacion = new this.cupsModel(cups);
        return await creacion.save();
    }

    // Método para buscar CUPS por código
    async buscarPorCodigo(codigo: string): Promise<ICups> {
        try {
            const cupsEncontrado = await this.cupsModel.findOne({ codigo }).exec();
            return cupsEncontrado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Método para buscar todos los CUPS
    async buscarTodos(): Promise<ICups[]> {
        return await this.cupsModel.find().exec();
    }

    // Método para eliminar CUPS
    async eliminarCups(codigo: string): Promise<any> {
        const respuesta = await this.cupsModel.deleteOne({ codigo }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        } else {
            return null;
        }
    }

    // Método para actualizar CUPS
    async actualizarCups(codigo: string, cupsDto: CupsDto): Promise<ICups> {
        try {
            const cupsActualizado = await this.cupsModel.findOneAndUpdate(
                { codigo },
                cupsDto,
                { new: true }
            ).exec();
            return cupsActualizado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
