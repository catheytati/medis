import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Orden_LaboratorioDto } from './orden_laboratorio.dto';
import { OrdenLaboratorioService } from './orden_laboratorio.service';

@Controller('orden-laboratorio')
export class OrdenLaboratorioController {
    constructor(private readonly ordenLaboratorioService: OrdenLaboratorioService) {}

    @Post()
    async crearOrdenLaboratorio(@Body() ordenLaboratorioDto: Orden_LaboratorioDto) {
        const respuesta = await this.ordenLaboratorioService.CrearOrden_Laboratorio(ordenLaboratorioDto);
        return { ok: true, respuesta };
    }

    @Get("/:cedula")
    async consultarOrdenLaboratorio(@Param("cedula") cedula: string) {
        return await this.ordenLaboratorioService.BuscarOrden_Laboratorio(cedula);
    }

    @Get()
    async consultarTodos() {
        return await this.ordenLaboratorioService.BuscarTodo();
    }

    @Delete("/:cedula")
    async eliminar(@Param("cedula") cedula: string) {
        const eliminar = await this.ordenLaboratorioService.EliminarOrden_Laboratorio(cedula);
        return eliminar ? "Eliminación exitosa" : "El Paciente no existe";
    }

    @Patch("/:cedula")
    async actualizar(@Param("cedula") cedula: string, @Body() ordenLaboratorioDto: Orden_LaboratorioDto) {
        const ordenLaboratorioActualizado = await this.ordenLaboratorioService.ActualizarOrden_Laboratorio(cedula, ordenLaboratorioDto);
        return ordenLaboratorioActualizado ? { ok: true, ordenLaboratorioActualizado } : { ok: false, mensaje: "La Orden de laboratorio no existe o no se pudo actualizar" };
    }
}
