import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PruebasOpcionesService } from './pruebasopciones.service';
import { PruebasOpcionesDto } from './pruebasopciones.dto';

@Controller('pruebasopciones')
export class PruebasOpcionesController {
    constructor(private readonly pruebasOpcionesService: PruebasOpcionesService) {}

    @Post()
    async crearPruebaOpcion(@Body() pruebasOpcionesDto: PruebasOpcionesDto) {
        const respuesta = await this.pruebasOpcionesService.crearPruebaOpcion(pruebasOpcionesDto);
        return { ok: true, respuesta };
    }

    @Get("/:id")
    async consultarPruebaOpcion(@Param("id") id: string) {
        return await this.pruebasOpcionesService.buscarPorId(id);
    }

    @Get()
    async consultarTodas() {
        return await this.pruebasOpcionesService.buscarTodas();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: string) {
        const eliminar = await this.pruebasOpcionesService.eliminarPruebaOpcion(id);
        if (eliminar != null) {
            return "Exitoso";
        }
        return "La opción de prueba no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: string, @Body() pruebasOpcionesDto: PruebasOpcionesDto) {
        const pruebaOpcionActualizada = await this.pruebasOpcionesService.actualizarPruebaOpcion(id, pruebasOpcionesDto);
        if (pruebaOpcionActualizada) {
            return { ok: true, pruebaOpcionActualizada };
        }
        return { ok: false, mensaje: "La opción de prueba no existe o no se pudo actualizar" };
    }
}
