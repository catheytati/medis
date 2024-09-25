import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TipoProfesionalService } from './tipoprofesional.service';
import { TipoProfesionalDto } from './tipoprofesional.dto';

@Controller('tipoprofesional')
export class TipoProfesionalController {
    constructor(private readonly tipoProfesionalService: TipoProfesionalService) {}

    @Post()
    async crearTipoProfesional(@Body() tipoProfesionalDto: TipoProfesionalDto) {
        const respuesta = await this.tipoProfesionalService.CrearTipoProfesional(tipoProfesionalDto);
        return { ok: true, respuesta };
    }

    @Get("/:id")
    async consultarTipoProfesional(@Param("id") id: number) {
        return await this.tipoProfesionalService.BuscarPorId(id);
    }

    @Get()
    async consultarTodos() {
        return await this.tipoProfesionalService.BuscarTodo();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: number) {
        const eliminar = await this.tipoProfesionalService.EliminarTipoProfesional(id);
        if (eliminar != null) {
            return "Eliminación exitosa";
        }
        return "El tipo profesional no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: number, @Body() tipoProfesionalDto: TipoProfesionalDto) {
        const tipoProfesionalActualizado = await this.tipoProfesionalService.ActualizarTipoProfesional(id, tipoProfesionalDto);
        if (tipoProfesionalActualizado) {
            return { ok: true, tipoProfesionalActualizado };
        }
        return { ok: false, mensaje: "El tipo profesional no existe o no se pudo actualizar" };
    }
}
