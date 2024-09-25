import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RegimenService } from './regimen.service';
import { RegimenDto } from './regimen.dto';

@Controller('regimen')
export class RegimenController {
    constructor(private readonly regimenService: RegimenService) { }

    @Post()
    async crearRegimen(@Body() regimenDto: RegimenDto) {
        const respuesta = await this.regimenService.crearRegimen(regimenDto);
        return { ok: true, respuesta };
    }

    @Get("/:id")
    async consultarRegimen(@Param("id") id: number) {
        return await this.regimenService.buscarPorId(id);
    }

    @Get()
    async consultarTodos() {
        return await this.regimenService.buscarTodos();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: number) {
        const eliminar = await this.regimenService.eliminarRegimen(id);
        if (eliminar != null) {
            return "Exitoso";
        }
        return "El régimen no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: number, @Body() regimenDto: RegimenDto) {
        const regimenActualizado = await this.regimenService.actualizarRegimen(id, regimenDto);
        if (regimenActualizado) {
            return { ok: true, regimenActualizado };
        }
        return { ok: false, mensaje: "El régimen no existe o no se pudo actualizar" };
    }
}
