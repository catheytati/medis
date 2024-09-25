import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILogin } from './login.modelo';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private loginModel: Model<ILogin>) {}

  async crearLogin(login: LoginDto): Promise<ILogin> {
    const creacion = new this.loginModel(login);
    return await creacion.save();
  }

  async buscarPorUsername(username: string): Promise<ILogin> {
    try {
      const loginEncontrado = await this.loginModel.findOne({ username }).exec();
      return loginEncontrado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async buscarTodos(): Promise<ILogin[]> {
    return await this.loginModel.find().exec();
  }

  async eliminarLogin(username: string): Promise<any> {
    const respuesta = await this.loginModel.deleteOne({ Num_identificacion: username }).exec();
    if (respuesta.deletedCount === 1) {
      return respuesta;
    } else {
      return null;
    }
  }

  async actualizarLogin(username: string, loginDto: LoginDto): Promise<ILogin> {
    try {
      const loginActualizado = await this.loginModel.findOneAndUpdate(
        { username },
        loginDto,
        { new: true }
      ).exec();
      return loginActualizado;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}