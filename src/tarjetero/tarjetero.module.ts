import { Module } from '@nestjs/common';
import { TarjeteroController } from './tarjetero.controller';
import { TarjeteroService } from './tarjetero.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TarjeteroSchema } from './tarjetero.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tarjetero', schema: TarjeteroSchema }]),
  ],
  controllers: [TarjeteroController],
  providers: [TarjeteroService],
})
export class TarjeteroModule {}
