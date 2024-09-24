import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResultadosDto } from './resultados.dto';
import { ResultadosService } from './resultados.service';

@Controller('Resultados')
export class ResultadosController {
    constructor(private readonly resultadosService: ResultadosService) {}

    @Post()
    async crearResultado(@Body() resultadosDto: ResultadosDto) {
        const respuesta = await this.resultadosService.crearResultado(resultadosDto);
        return { ok: true, respuesta };
    }

    @Get("/:num_procesamiento")
    async consultarResultado(@Param("num_procesamiento") num_procesamiento: string) {
        return await this.resultadosService.buscarResultado(num_procesamiento);
    }

    @Get()
    async consultarTodos() {
        return await this.resultadosService.buscarTodos();
    }

    @Delete("/:num_procesamiento")
    async eliminar(@Param("num_procesamiento") num_procesamiento: string) {
        const eliminado = await this.resultadosService.eliminarResultado(num_procesamiento);
        return eliminado ? "Eliminación exitosa" : "El resultado no existe";
    }

    @Patch("/:num_procesamiento")
    async actualizar(@Param("num_procesamiento") num_procesamiento: string, @Body() resultadosDto: ResultadosDto) {
        const resultadoActualizado = await this.resultadosService.actualizarResultado(num_procesamiento, resultadosDto);
        return resultadoActualizado ? { ok: true, resultadoActualizado } : { ok: false, mensaje: "El resultado no existe o no se pudo actualizar" };
    }
}
