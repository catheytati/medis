import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrden_Laboratorio } from './orden_laboratorio.modelo';
import { Orden_LaboratorioDto } from './orden_laboratorio.dto';
import { IPaciente } from 'src/paciente/paciente.modelo';
import { PacienteService } from 'src/paciente/paciente.service';
import { IProfesional } from 'src/profesional/profesional.modelo';
import { ProfesionalService } from 'src/profesional/profesional.service';

@Injectable()
export class OrdenLaboratorioService {
    constructor(
        @InjectModel('Orden_Laboratorio')
        private readonly ordenLaboratorioModel: Model<IOrden_Laboratorio>, 
    
        @InjectModel('Paciente') 
        private readonly pacienteModel: Model<IPaciente>,

        @InjectModel('Profesional') 
        private readonly profesionalModel: Model<IProfesional>,
    
        private pacienteService: PacienteService,
        private profesionalService: ProfesionalService,
      ){}

    async CrearOrden_Laboratorio(ordenLaboratorioDto: Orden_LaboratorioDto): Promise<IOrden_Laboratorio> {
        const creacion = new this.ordenLaboratorioModel(ordenLaboratorioDto);
        return await creacion.save();
    }

    async BuscarOrden_Laboratorio(cedula: string): Promise<IOrden_Laboratorio | null> {
        return await this.ordenLaboratorioModel.findOne({ Numero_orden: cedula }).exec();
    }

    async BuscarTodo(): Promise<IOrden_Laboratorio[]> {
        return await this.ordenLaboratorioModel.find().exec();
    }

    async EliminarOrden_Laboratorio(cedula: string): Promise<any> {
        return await this.ordenLaboratorioModel.deleteOne({ Numero_orden: cedula }).exec();
    }

    async ActualizarOrden_Laboratorio(cedula: string, ordenLaboratorioDto: Orden_LaboratorioDto): Promise<IOrden_Laboratorio | null> {
        return await this.ordenLaboratorioModel.findOneAndUpdate(
            { Numero_orden: cedula },
            ordenLaboratorioDto,
            { new: true }
        ).exec();
    }
}
