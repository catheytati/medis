import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TarjeteroService } from './tarjetero.service';
import { TarjeteroDto } from './tarjetero.dto';

@Controller('tarjetero')
export class TarjeteroController {
  constructor(private readonly tarjeteroService: TarjeteroService) { }

  @Post()
  async crearTarjetero(@Body() tarjeteroDto: TarjeteroDto) {
    const respuesta = await this.tarjeteroService.crearTarjetero(tarjeteroDto);
    return { ok: true, respuesta };
  }

  @Get("/:id")
  async consultarTarjetero(@Param("id") id: number) {
    return await this.tarjeteroService.buscarPorId(id);
  }

  @Get()
  async consultarTodos() {
    return await this.tarjeteroService.buscarTodos();
  }

  @Delete("/:id")
  async eliminar(@Param("id") id: number) {
    const eliminar = await this.tarjeteroService.eliminarTarjetero(id);
    if (eliminar != null) {
      return "Eliminación exitosa";
    }
    return "El Tarjetero no existe";
  }

  @Patch("/:id")
  async actualizar(@Param("id") id: number, @Body() tarjeteroDto: TarjeteroDto) {
    const tarjeteroActualizado = await this.tarjeteroService.actualizarTarjetero(id, tarjeteroDto);
    if (tarjeteroActualizado) {
      return { ok: true, tarjeteroActualizado };
    }
    return { ok: false, mensaje: "El tarjetero no existe o no se pudo actualizar" };
  }
}
