import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProfesional } from './profesional.modelo';
import { ProfesionalDto } from './profesional.dto';

@Injectable()
export class ProfesionalService {
    constructor(@InjectModel('Profesional') private profesionalModel: Model<IProfesional>) {}

    async crearProfesional(profesionalDto: ProfesionalDto): Promise<IProfesional> {
        const creacion = new this.profesionalModel(profesionalDto);
        return await creacion.save();
    }

    async buscarProfesional(registroMedico: string): Promise<IProfesional | null> {
        return await this.profesionalModel.findOne({ registroMedico }).exec();
    }

    async buscarTodos(): Promise<IProfesional[]> {
        return await this.profesionalModel.find().exec();
    }

    async eliminarProfesional(registroMedico: string): Promise<any> {
        return await this.profesionalModel.deleteOne({ registroMedico }).exec();
    }

    async actualizarProfesional(registroMedico: string, profesionalDto: ProfesionalDto): Promise<IProfesional | null> {
        return await this.profesionalModel.findOneAndUpdate(
            { registroMedico },
            profesionalDto,
            { new: true }
        ).exec();
    }
}
