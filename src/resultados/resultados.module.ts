import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';
import { ResultadosSchema } from './resultados.modelo';
import { PacienteSchema } from 'src/paciente/paciente.modelo';
import { PacienteService } from 'src/paciente/paciente.service';
import { PacienteModule } from 'src/paciente/paciente.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Resultados', schema: ResultadosSchema },
      { name: 'Paciente', schema: PacienteSchema }
    ]),

    PacienteModule,
    
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService, PacienteService],
  exports: [ResultadosService],  // Exporta el servicio si es necesario en otros módulos
})
export class ResultadosModule {}
