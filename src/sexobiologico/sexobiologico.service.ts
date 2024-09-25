import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISexoBiologico } from './sexobiologico.modelo';
import { SexoBiologicoDto } from './sexobiologico.dto';

@Injectable()
export class SexoBiologicoService {
    constructor(@InjectModel('SexoBiologico') private sexoBiologicoModel: Model<ISexoBiologico>) {}

    // Método para crear un sexo biológico
    async crearSexoBiologico(sexoBiologicoDto: SexoBiologicoDto): Promise<ISexoBiologico> {
        const creacion = new this.sexoBiologicoModel(sexoBiologicoDto);
        return await creacion.save();
    }

    // Método para buscar un sexo biológico por ID
    async buscarPorId(id: number): Promise<ISexoBiologico> {
        try {
            const encontrado = await this.sexoBiologicoModel.findById(id).exec();
            return encontrado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Método para buscar todos los sexos biológicos
    async buscarTodos(): Promise<ISexoBiologico[]> {
        return await this.sexoBiologicoModel.find().exec();
    }

    // Método para eliminar un sexo biológico
    async eliminarSexoBiologico(id: number): Promise<any> {
        const respuesta = await this.sexoBiologicoModel.deleteOne({ _id: id }).exec();
        return respuesta.deletedCount === 1 ? respuesta : null;
    }

    // Método para actualizar un sexo biológico
    async actualizarSexoBiologico(id: number, sexoBiologicoDto: SexoBiologicoDto): Promise<ISexoBiologico> {
        try {
            const actualizado = await this.sexoBiologicoModel.findByIdAndUpdate(
                id,
                sexoBiologicoDto,
                { new: true }
            ).exec();
            return actualizado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
