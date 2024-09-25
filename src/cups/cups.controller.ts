import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CupsService } from './cups.service';
import { CupsDto } from './cups.dto';

@Controller('cups')
export class CupsController {
    constructor(private readonly cupsService: CupsService) {}

    @Post()
    async crearCups(@Body() cupsDto: CupsDto) {
        const respuesta = await this.cupsService.crearCups(cupsDto);
        return { ok: true, respuesta };
    }

    @Get("/:codigo")
    async consultarCups(@Param("codigo") codigo: string) {
        return await this.cupsService.buscarPorCodigo(codigo);
    }

    @Get()
    async consultarTodos() {
        return await this.cupsService.buscarTodos();
    }

    @Delete("/:codigo")
    async eliminar(@Param("codigo") codigo: string) {
        const eliminar = await this.cupsService.eliminarCups(codigo);
        if (eliminar != null) {
            return "exitoso";
        }
        return "El CUPS no existe";
    }

    @Patch("/:codigo")
    async actualizar(@Param("codigo") codigo: string, @Body() cupsDto: CupsDto) {
        const cupsActualizado = await this.cupsService.actualizarCups(codigo, cupsDto);
        if (cupsActualizado) {
            return { ok: true, cupsActualizado };
        }
        return { ok: false, mensaje: "El CUPS no existe o no se pudo actualizar" };
    }
}
