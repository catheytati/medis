import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResultados } from './resultados.modelo';
import { ResultadosDto } from './resultados.dto';
import { IPaciente } from 'src/paciente/paciente.modelo';
import { PacienteService } from 'src/paciente/paciente.service';

@Injectable()
export class ResultadosService {
    constructor(
        @InjectModel('Resultados') private resultadosModel: Model<IResultados>,
        @InjectModel('Paciente') private readonly pacienteModel: Model<IPaciente>,

        private pacienteService: PacienteService,
    ){}

    async crearResultado(resultadosDto: ResultadosDto): Promise<IResultados> {
        const nuevoResultado = new this.resultadosModel(resultadosDto);
        return await nuevoResultado.save();
    }

    async buscarResultado(num_procesamiento: string): Promise<IResultados | null> {
        return await this.resultadosModel.findOne({ Num_procesamiento: num_procesamiento }).exec();
    }

    async buscarTodos(): Promise<IResultados[]> {
        return await this.resultadosModel.find().exec();
    }

    async eliminarResultado(num_procesamiento: string): Promise<any> {
        return await this.resultadosModel.deleteOne({ Num_procesamiento: num_procesamiento }).exec();
    }

    async actualizarResultado(num_procesamiento: string, resultadosDto: ResultadosDto): Promise<IResultados | null> {
        return await this.resultadosModel.findOneAndUpdate(
            { Num_procesamiento: num_procesamiento },
            resultadosDto,
            { new: true }
        ).exec();
    }
}
