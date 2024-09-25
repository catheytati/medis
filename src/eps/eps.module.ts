import { Module } from '@nestjs/common';
import { EpsController } from './eps.controller';
import { EpsService } from './eps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EpsSchema } from './eps.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Eps', schema: EpsSchema }]),
  ],
  controllers: [EpsController],
  providers: [EpsService],
})
export class EpsModule {}
