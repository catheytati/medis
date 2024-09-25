import { Module } from '@nestjs/common';
import { PruebasController } from './pruebas.controller';
import { PruebasService } from './pruebas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebasSchema } from './pruebas.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Pruebas', schema: PruebasSchema }]),
    ],
    controllers: [PruebasController],
    providers: [PruebasService],
})
export class PruebasModule {}
