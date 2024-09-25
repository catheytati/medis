import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRegimen } from './regimen.modelo';
import { RegimenDto } from './regimen.dto';

@Injectable()
export class RegimenService {
    constructor(@InjectModel('Regimen') private regimenModel: Model<IRegimen>) {}

    // Método para crear régimen
    async crearRegimen(regimen: RegimenDto): Promise<IRegimen> {
        const creacion = new this.regimenModel(regimen);
        return await creacion.save();
    }

    // Método para buscar un régimen por ID
    async buscarPorId(id: number): Promise<IRegimen> {
        return await this.regimenModel.findOne({ id }).exec();
    }

    // Método para buscar todos los regímenes
    async buscarTodos(): Promise<IRegimen[]> {
        return await this.regimenModel.find().exec();
    }

    // Método para eliminar un régimen
    async eliminarRegimen(id: number): Promise<any> {
        const respuesta = await this.regimenModel.deleteOne({ id }).exec();
        return respuesta.deletedCount === 1 ? respuesta : null;
    }

    // Método para actualizar un régimen
    async actualizarRegimen(id: number, regimenDto: RegimenDto): Promise<IRegimen> {
        return await this.regimenModel.findOneAndUpdate(
            { id },
            regimenDto,
            { new: true } // Retorna el documento actualizado
        ).exec();
    }
}
