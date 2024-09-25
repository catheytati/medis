import { Module } from '@nestjs/common';
import { ProcedimientosController } from './procedimientos.controller';
import { ProcedimientosService } from './procedimientos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcedimientosSchema } from './procedimientos.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Procedimientos', schema: ProcedimientosSchema }]),
    ],
    controllers: [ProcedimientosController],
    providers: [ProcedimientosService],
})
export class ProcedimientosModule {}
