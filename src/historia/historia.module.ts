import { Module } from '@nestjs/common';
import { HistoriaController } from './historia.controller';

@Module({
  controllers: [HistoriaController]
})
export class HistoriaModule {}
