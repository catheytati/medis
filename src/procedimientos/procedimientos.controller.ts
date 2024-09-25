import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProcedimientosService } from './procedimientos.service';
import { ProcedimientosDto } from './procedimientos.dto';

@Controller('procedimientos')
export class ProcedimientosController {
    constructor(private readonly procedimientosService: ProcedimientosService) {}

    @Post()
    async crearProcedimiento(@Body() procedimientosDto: ProcedimientosDto) {
        const respuesta = await this.procedimientosService.crearProcedimiento(procedimientosDto);
        return { ok: true, respuesta };
    }

    @Get("/:id")
    async consultarProcedimiento(@Param("id") id: string) {
        return await this.procedimientosService.buscarPorId(id);
    }

    @Get()
    async consultarTodos() {
        return await this.procedimientosService.buscarTodos();
    }

    @Delete("/:id")
    async eliminar(@Param("id") id: string) {
        const eliminar = await this.procedimientosService.eliminarProcedimiento(id);
        if (eliminar != null) {
            return "Exitoso";
        }
        return "El procedimiento no existe";
    }

    @Patch("/:id")
    async actualizar(@Param("id") id: string, @Body() procedimientosDto: ProcedimientosDto) {
        const procedimientoActualizado = await this.procedimientosService.actualizarProcedimiento(id, procedimientosDto);
        if (procedimientoActualizado) {
            return { ok: true, procedimientoActualizado };
        }
        return { ok: false, mensaje: "El procedimiento no existe o no se pudo actualizar" };
    }
}
