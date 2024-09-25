import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProcedimientos } from './procedimientos.modelo';
import { ProcedimientosDto } from './procedimientos.dto';

@Injectable()
export class ProcedimientosService {
    constructor(@InjectModel('Procedimientos') private procedimientosModel: Model<IProcedimientos>) {}

    // Crear procedimiento
    async crearProcedimiento(procedimientos: ProcedimientosDto): Promise<IProcedimientos> {
        const creacion = new this.procedimientosModel(procedimientos);
        return await creacion.save();
    }

    // Buscar procedimiento por ID
    async buscarPorId(id: string): Promise<IProcedimientos> {
        return await this.procedimientosModel.findById(id).exec();
    }

    // Buscar todos los procedimientos
    async buscarTodos(): Promise<IProcedimientos[]> {
        return await this.procedimientosModel.find().exec();
    }

    // Eliminar procedimiento
    async eliminarProcedimiento(id: string): Promise<any> {
        const respuesta = await this.procedimientosModel.deleteOne({ _id: id }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        }
        return null;
    }

    // Actualizar procedimiento
    async actualizarProcedimiento(id: string, procedimientosDto: ProcedimientosDto): Promise<IProcedimientos> {
        return await this.procedimientosModel.findByIdAndUpdate(id, procedimientosDto, { new: true }).exec();
    }
}
