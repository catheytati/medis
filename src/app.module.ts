import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { HistoriaService } from './historia/historia.service';
import { HistoriaModule } from './historia/historia.module';
import { OrdenLaboratorioModule } from './orden_laboratorio/orden_laboratorio.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadosModule } from './resultados/resultados.module';  // Asegúrate de importar correctamente el módulo
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://senasoftmd:tatiycathe1234@cluster0.g5kvf.mongodb.net/medisMD'),
    PacienteModule,
    HistoriaModule,
    OrdenLaboratorioModule,
    ProfesionalModule,
    ResultadosModule,
    LoginModule  // Este módulo debe estar importado para que "ResultadosModel" esté disponible.
  ],
  controllers: [AppController],
  providers: [AppService, HistoriaService],  // Elimina `ResultadosService` si solo está siendo usado dentro de su propio módulo
})
export class AppModule {}
