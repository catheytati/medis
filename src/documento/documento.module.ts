import { Module } from '@nestjs/common';
import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentoSchema } from './documento.modelo';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Documento', schema: DocumentoSchema }]),
    ],
    controllers: [DocumentoController],
    providers: [DocumentoService],
})
export class DocumentoModule {}
