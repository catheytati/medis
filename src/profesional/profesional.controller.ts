import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfesionalDto } from './profesional.dto';
import { ProfesionalService } from './profesional.service';

@Controller('profesionales')
export class ProfesionalController {
    constructor(private readonly profesionalService: ProfesionalService) {}

    @Post()
    async crearProfesional(@Body() profesionalDto: ProfesionalDto) {
        const respuesta = await this.profesionalService.crearProfesional(profesionalDto);
        return { ok: true, respuesta };
    }

    @Get("/:registroMedico")
    async consultarProfesional(@Param("registroMedico") registroMedico: string) {
        return await this.profesionalService.buscarProfesional(registroMedico);
    }

    @Get()
    async consultarTodos() {
        return await this.profesionalService.buscarTodos();
    }

    @Delete("/:registroMedico")
    async eliminar(@Param("registroMedico") registroMedico: string) {
        const eliminar = await this.profesionalService.eliminarProfesional(registroMedico);
        return eliminar ? "Eliminación exitosa" : "El Profesional no existe";
    }

    @Patch("/:registroMedico")
    async actualizar(@Param("registroMedico") registroMedico: string, @Body() profesionalDto: ProfesionalDto) {
        const profesionalActualizado = await this.profesionalService.actualizarProfesional(registroMedico, profesionalDto);
        return profesionalActualizado ? { ok: true, profesionalActualizado } : { ok: false, mensaje: "El Profesional no existe o no se pudo actualizar" };
    }
}
