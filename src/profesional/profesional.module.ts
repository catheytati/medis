import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesionalController } from './profesional.controller';
import { ProfesionalService } from './profesional.service';
import { ProfesionalSchema } from './profesional.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profesional', schema: ProfesionalSchema }]),
  ],
  controllers: [ProfesionalController],
  providers: [ProfesionalService],
  exports: [ProfesionalService], // Exporta el servicio si es necesario en otros módulos
})
export class ProfesionalModule {}
