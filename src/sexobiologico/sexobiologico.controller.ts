import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SexoBiologicoService } from './sexobiologico.service';
import { SexoBiologicoDto } from './sexobiologico.dto';

@Controller('sexo-biologico')
export class SexoBiologicoController {
    constructor(private readonly sexoBiologicoService: SexoBiologicoService) { }

    @Post()
    async crearSexoBiologico(@Body() sexoBiologicoDto: SexoBiologicoDto) {
        const respuesta = await this.sexoBiologicoService.crearSexoBiologico(sexoBiologicoDto);
        return { ok: true, respuesta };
    }

    @Get("/:id")
    async consultarSexoBiologico(@Param("id") id: number) {
        return await this.sexoBiologicoService.buscarPorId(id);
    }

    @Get()
    async consultarTodos() {
        return await this.sexoBiologicoService.buscarTodos();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: number) {
        const eliminar = await this.sexoBiologicoService.eliminarSexoBiologico(id);
        if (eliminar != null) {
            return "Exitoso";
        }
        return "El Sexo Biológico no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: number, @Body() sexoBiologicoDto: SexoBiologicoDto) {
        const sexoBiologicoActualizado = await this.sexoBiologicoService.actualizarSexoBiologico(id, sexoBiologicoDto);
        if (sexoBiologicoActualizado) {
            return { ok: true, sexoBiologicoActualizado };
        }
        return { ok: false, mensaje: "El Sexo Biológico no existe o no se pudo actualizar" };
    }
}
