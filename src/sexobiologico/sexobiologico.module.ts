import { Module } from '@nestjs/common';
import { SexoBiologicoController } from './sexobiologico.controller';
import { SexoBiologicoService } from './sexobiologico.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SexoBiologicoSchema } from './sexobiologico.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SexoBiologico', schema: SexoBiologicoSchema }]),
  ],
  controllers: [SexoBiologicoController],
  providers: [SexoBiologicoService]
})
export class SexoBiologicoModule {}
