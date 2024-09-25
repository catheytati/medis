import { Module } from '@nestjs/common';
import { PruebasOpcionesController } from './pruebasopciones.controller';
import { PruebasOpcionesService } from './pruebasopciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebasOpcionesSchema } from './pruebasopciones.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'PruebasOpciones', schema: PruebasOpcionesSchema }]),
    ],
    controllers: [PruebasOpcionesController],
    providers: [PruebasOpcionesService],
})
export class PruebasOpcionesModule {}
