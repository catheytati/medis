import { Module } from '@nestjs/common';
import { TipoProfesionalController } from './tipoprofesional.controller';
import { TipoProfesionalService } from './tipoprofesional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoProfesionalSchema } from './tipoprofesional.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'TipoProfesional', schema: TipoProfesionalSchema }]),
    ],
    controllers: [TipoProfesionalController],
    providers: [TipoProfesionalService],
})
export class TipoProfesionalModule {}
