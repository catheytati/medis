import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoDto } from './documento.dto';

@Controller('documento')
export class DocumentoController {
    constructor(private readonly documentoService: DocumentoService) {}

    @Post()
    async crearDocumento(@Body() documentoDto: DocumentoDto) {
        const respuesta = await this.documentoService.CrearDocumento(documentoDto);
        return { ok: true, respuesta };
    }

    @Get("/:codigo")
    async consultarDocumento(@Param("codigo") codigo: string) {
        return await this.documentoService.BuscarCodigo(codigo);
    }

    @Get()
    async consultarTodos() {
        return await this.documentoService.BuscarTodo();
    }

    @Delete("/:codigo")
    async eliminar(@Param("codigo") codigo: string) {
        const eliminar = await this.documentoService.EliminarDocumento(codigo);
        if (eliminar != null) {
            return "Eliminación exitosa";
        }
        return "El documento no existe";
    }

    @Patch("/:codigo")
    async actualizar(@Param("codigo") codigo: string, @Body() documentoDto: DocumentoDto) {
        const documentoActualizado = await this.documentoService.ActualizarDocumento(codigo, documentoDto);
        if (documentoActualizado) {
            return { ok: true, documentoActualizado };
        }
        return { ok: false, mensaje: "El documento no existe o no se pudo actualizar" };
    }
}
