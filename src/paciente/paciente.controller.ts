import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteDto } from './paciente.dto';

@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) { }

  @Post()
  async crearPaciente(@Body() pacienteDto: PacienteDto) {
    const respuesta = await this.pacienteService.CrearPaciente(pacienteDto);
    return { ok: true, respuesta }
  }

  @Get("/:cedula")
  async ConsultarPaciente(@Param("cedula") cedula: string) {
    return await this.pacienteService.BuscarCedula(cedula);
  }


  @Get()
  async ConsultarTodos() {
    return await this.pacienteService.BuscarTodo();
  }

  @Delete("/:cedula")
  async Eliminar(@Param("cedula") cedula: string) {
    const eliminar = await this.pacienteService.EliminarPaciente(cedula)
    if (eliminar != null) {
      return "exitoso"
    } return "El Paciente no existe"
  }

  @Patch("/:cedula")
  async Actualizar(@Param("cedula") cedula: string, @Body() pacienteDto: PacienteDto) {
    const pacienteActualizado = await this.pacienteService.ActualizarPaciente(cedula, pacienteDto);
    if (pacienteActualizado) {
      return { ok: true, pacienteActualizado };
    } return { ok: false, mensaje: "El paciente no existe o no se pudo actualizar" };
  }

}
