import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITipoProfesional } from './tipoprofesional.modelo';
import { TipoProfesionalDto } from './tipoprofesional.dto';

@Injectable()
export class TipoProfesionalService {
    constructor(@InjectModel('TipoProfesional') private tipoProfesionalModel: Model<ITipoProfesional>) {}

    // Método para crear tipo profesional
    async CrearTipoProfesional(tipoProfesional: TipoProfesionalDto): Promise<ITipoProfesional> {
        const creacion = new this.tipoProfesionalModel(tipoProfesional);
        return await creacion.save();
    }

    // Método para buscar un tipo profesional por ID
    async BuscarPorId(id: number): Promise<ITipoProfesional> {
        try {
            const tipoProfesionalEncontrado = await this.tipoProfesionalModel.findOne({ id }).exec();
            return tipoProfesionalEncontrado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Método para buscar todos los tipos profesionales
    async BuscarTodo(): Promise<ITipoProfesional[]> {
        return await this.tipoProfesionalModel.find().exec();
    }

    // Método para eliminar un tipo profesional
    async EliminarTipoProfesional(id: number): Promise<any> {
        const respuesta = await this.tipoProfesionalModel.deleteOne({ id }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        }
        return null;
    }

    // Método para actualizar un tipo profesional
    async ActualizarTipoProfesional(id: number, tipoProfesionalDto: TipoProfesionalDto): Promise<ITipoProfesional> {
        try {
            const tipoProfesionalActualizado = await this.tipoProfesionalModel.findOneAndUpdate(
                { id },
                tipoProfesionalDto,
                { new: true } // Retorna el documento actualizado
            ).exec();
            return tipoProfesionalActualizado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
