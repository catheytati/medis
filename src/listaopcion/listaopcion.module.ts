import { Module } from '@nestjs/common';
import { ListaOpcionController } from './listaopcion.controller';
import { ListaOpcionService } from './listaopcion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListaOpcionSchema } from './listaopcion.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ListaOpcion', schema: ListaOpcionSchema }]),
  ],
  controllers: [ListaOpcionController],
  providers: [ListaOpcionService],
})
export class ListaOpcionModule {}
