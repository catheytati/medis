import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './login.modelo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
