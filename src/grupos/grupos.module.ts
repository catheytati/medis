import { Module } from '@nestjs/common';
import { GruposController } from './grupos.controller';
import { GruposService } from './grupos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GrupoSchema } from './grupos.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Grupo', schema: GrupoSchema }]),
  ],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}