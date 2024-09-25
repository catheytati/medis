import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PruebasService } from './pruebas.service';
import { PruebasDto } from './pruebas.dto';

@Controller('pruebas')
export class PruebasController {
    constructor(private readonly pruebasService: PruebasService) { }

    @Post()
    async crearPrueba(@Body() pruebasDto: PruebasDto) {
        const respuesta = await this.pruebasService.crearPrueba(pruebasDto);
        return { ok: true, respuesta }
    }

    @Get("/:id")
    async consultarPrueba(@Param("id") id: string) {
        return await this.pruebasService.buscarPorId(id);
    }

    @Get()
    async consultarTodas() {
        return await this.pruebasService.buscarTodas();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: string) {
        const eliminar = await this.pruebasService.eliminarPrueba(id);
        if (eliminar != null) {
            return "Exitoso";
        } 
        return "La prueba no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: string, @Body() pruebasDto: PruebasDto) {
        const pruebaActualizada = await this.pruebasService.actualizarPrueba(id, pruebasDto);
        if (pruebaActualizada) {
            return { ok: true, pruebaActualizada };
        } 
        return { ok: false, mensaje: "La prueba no existe o no se pudo actualizar" };
    }
}
