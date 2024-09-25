import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposDto } from './grupos.dto';

@Controller('grupos')
export class GruposController {
    constructor(private readonly gruposService: GruposService) { }

  @Post()
  async crearGrupo(@Body() gruposDto: GruposDto) {
    const respuesta = await this.gruposService.CrearGrupo(gruposDto);
    return { ok: true, respuesta }
  }

  @Get("/:codigo")
  async ConsultarGrupo(@Param("codigo") codigo: string) {
    return await this.gruposService.BuscarPorCodigo(codigo);
  }

  @Get()
  async ConsultarTodos() {
    return await this.gruposService.BuscarTodos();
  }

  @Delete("/:codigo")
  async Eliminar(@Param("codigo") codigo: string) {
    const eliminar = await this.gruposService.EliminarGrupo(codigo);
    if (eliminar != null) {
      return "exitoso";
    }
    return "El grupo no existe";
  }

  @Patch("/:codigo")
  async Actualizar(@Param("codigo") codigo: string, @Body() gruposDto: GruposDto) {
    const grupoActualizado = await this.gruposService.ActualizarGrupo(codigo, gruposDto);
    if (grupoActualizado) {
      return { ok: true, grupoActualizado };
    }
    return { ok: false, mensaje: "El grupo no existe o no se pudo actualizar" };
  }
}