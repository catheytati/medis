import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EpsService } from './eps.service';
import { EpsDto } from './eps.dto';

@Controller('eps')
export class EpsController {
  constructor(private readonly epsService: EpsService) {}

  @Post()
  async crearEps(@Body() epsDto: EpsDto) {
    const respuesta = await this.epsService.crearEps(epsDto);
    return { ok: true, respuesta };
  }

  @Get("/:id")
  async consultarEps(@Param("id") id: number) {
    return await this.epsService.buscarPorId(id);
  }

  @Get()
  async consultarTodos() {
    return await this.epsService.buscarTodos();
  }

  @Delete("/:id")
  async eliminar(@Param("id") id: number) {
    const eliminar = await this.epsService.eliminarEps(id);
    if (eliminar != null) {
      return "Eliminación exitosa";
    }
    return "La EPS no existe";
  }

  @Patch("/:id")
  async actualizar(@Param("id") id: number, @Body() epsDto: EpsDto) {
    const epsActualizada = await this.epsService.actualizarEps(id, epsDto);
    if (epsActualizada) {
      return { ok: true, epsActualizada };
    }
    return { ok: false, mensaje: "La EPS no existe o no se pudo actualizar" };
  }
}
