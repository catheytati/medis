import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdenLaboratorioController } from './orden_laboratorio.controller';
import { OrdenLaboratorioService } from './orden_laboratorio.service';
import { PacienteSchema } from 'src/paciente/paciente.modelo';
import { PacienteModule } from 'src/paciente/paciente.module';
import { PacienteService } from 'src/paciente/paciente.service';
import { ProfesionalSchema } from 'src/profesional/profesional.modelo';
import { ProfesionalService } from 'src/profesional/profesional.service';
import { OrdenLaboratorioSchema } from './orden_laboratorio.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Orden_Laboratorio', schema: OrdenLaboratorioSchema },
      { name: 'Paciente', schema: PacienteSchema },
      { name: 'Profesional', schema: ProfesionalSchema }
    ]),

    PacienteModule,
  ],
  controllers: [OrdenLaboratorioController],
  providers: [OrdenLaboratorioService, PacienteService, ProfesionalService],
  exports: [OrdenLaboratorioService], // Exporta el servicio si es necesario en otros módulos
})
export class OrdenLaboratorioModule {}
