import { Module } from '@nestjs/common';
import { RegimenController } from './regimen.controller';
import { RegimenService } from './regimen.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegimenSchema } from './regimen.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Regimen', schema: RegimenSchema }]),
    ],
    controllers: [RegimenController],
    providers: [RegimenService]
})
export class RegimenModule {}
