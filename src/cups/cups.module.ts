import { Module } from '@nestjs/common';
import { CupsController } from './cups.controller';
import { CupsService } from './cups.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CupsSchema } from './cups.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cups', schema: CupsSchema }]),
    ],
    controllers: [CupsController],
    providers: [CupsService]
})
export class CupsModule {}
