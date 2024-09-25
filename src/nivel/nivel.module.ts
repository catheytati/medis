import { Module } from '@nestjs/common';
import { NivelController } from './nivel.controller';
import { NivelService } from './nivel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NivelSchema } from './nivel.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Nivel', schema: NivelSchema }]),
  ],
  controllers: [NivelController],
  providers: [NivelService],
})
export class NivelModule {}
