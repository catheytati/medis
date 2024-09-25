import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelDto } from './nivel.dto';

@Controller('nivel')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Post()
  async crearNivel(@Body() nivelDto: NivelDto) {
    const respuesta = await this.nivelService.CrearNivel(nivelDto);
    return { ok: true, respuesta };
  }

  @Get("/:id")
  async consultarNivel(@Param("id") id: number) {
    return await this.nivelService.buscarPorId(id);
  }

  @Get()
  async consultarTodos() {
    return await this.nivelService.buscarTodos();
  }

  @Delete("/:id")
  async eliminar(@Param("id") id: number) {
    const eliminar = await this.nivelService.eliminarNivel(id);
    if (eliminar != null) {
      return "Eliminación exitosa";
    }
    return "El Nivel no existe";
  }

  @Patch("/:id")
  async actualizar(@Param("id") id: number, @Body() nivelDto: NivelDto) {
    const nivelActualizado = await this.nivelService.actualizarNivel(id, nivelDto);
    if (nivelActualizado) {
      return { ok: true, nivelActualizado };
    }
    return { ok: false, mensaje: "El Nivel no existe o no se pudo actualizar" };
  }
}
