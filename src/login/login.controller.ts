import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

  @Post()
  async crearLogin(@Body() loginDto: LoginDto) {
    const respuesta = await this.loginService.crearLogin(loginDto);
    return { ok: true, respuesta };
  }

  @Get("/:username")
  async consultarLogin(@Param("username") username: string) {
    return await this.loginService.buscarPorUsername(username);
  }

  @Get()
  async consultarTodos() {
    return await this.loginService.buscarTodos();
  }

  @Delete("/:username")
  async eliminar(@Param("username") username: string) {
    const eliminar = await this.loginService.eliminarLogin(username);
    if (eliminar != null) {
      return "Eliminación exitosa";
    }
    return "El usuario no existe";
  }

  @Patch("/:username")
  async actualizar(@Param("username") username: string, @Body() loginDto: LoginDto) {
    const loginActualizado = await this.loginService.actualizarLogin(username, loginDto);
    if (loginActualizado) {
      return { ok: true, loginActualizado };
    }
    return { ok: false, mensaje: "El usuario no existe o no se pudo actualizar" };
  }
}
