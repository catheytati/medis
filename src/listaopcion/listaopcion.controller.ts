import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ListaOpcionService } from './listaopcion.service';
import { ListaOpcionDto } from './listaopcion.dto';

@Controller('listaopcion')
export class ListaOpcionController {
  constructor(private readonly listaOpcionService: ListaOpcionService) { }

  @Post()
  async crearListaOpcion(@Body() listaOpcionDto: ListaOpcionDto) {
    const respuesta = await this.listaOpcionService.crearListaOpcion(listaOpcionDto);
    return { ok: true, respuesta };
  }

  @Get("/:id")
  async consultarListaOpcion(@Param("id") id: number) {
    return await this.listaOpcionService.buscarPorId(id);
  }

  @Get()
  async consultarTodos() {
    return await this.listaOpcionService.buscarTodos();
  }

  @Delete("/:id")
  async eliminar(@Param("id") id: number) {
    const eliminar = await this.listaOpcionService.eliminarListaOpcion(id);
    if (eliminar != null) {
      return "Eliminación exitosa";
    }
    return "La opción no existe";
  }

  @Patch("/:id")
  async actualizar(@Param("id") id: number, @Body() listaOpcionDto: ListaOpcionDto) {
    const listaOpcionActualizada = await this.listaOpcionService.actualizarListaOpcion(id, listaOpcionDto);
    if (listaOpcionActualizada) {
      return { ok: true, listaOpcionActualizada };
    }
    return { ok: false, mensaje: "La opción no existe o no se pudo actualizar" };
  }
}
