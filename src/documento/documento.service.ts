import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDocumento } from './documento.modelo';
import { DocumentoDto } from './documento.dto';

@Injectable()
export class DocumentoService {
    constructor(@InjectModel('Documento') private documentoModel: Model<IDocumento>) {}

    // Método para crear documento
    async CrearDocumento(documento: DocumentoDto): Promise<IDocumento> {
        const creacion = new this.documentoModel(documento);
        return await creacion.save();
    }

    // Método para buscar un documento por código
    async BuscarCodigo(codigo: string): Promise<IDocumento> {
        try {
            const documentoEncontrado = await this.documentoModel.findOne({ codigo }).exec();
            return documentoEncontrado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Método para buscar todos los documentos
    async BuscarTodo(): Promise<IDocumento[]> {
        return await this.documentoModel.find().exec();
    }

    // Método para eliminar un documento
    async EliminarDocumento(codigo: string): Promise<any> {
        const respuesta = await this.documentoModel.deleteOne({ codigo }).exec();
        if (respuesta.deletedCount === 1) {
            return respuesta;
        }
        return null;
    }

    // Método para actualizar un documento
    async ActualizarDocumento(codigo: string, documentoDto: DocumentoDto): Promise<IDocumento> {
        try {
            const documentoActualizado = await this.documentoModel.findOneAndUpdate(
                { codigo },
                documentoDto,
                { new: true } // Retorna el documento actualizado
            ).exec();
            return documentoActualizado;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
