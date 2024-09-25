import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { OrdenLaboratorioModule } from './orden_laboratorio/orden_laboratorio.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadosModule } from './resultados/resultados.module';  // Asegúrate de importar correctamente el módulo
import { LoginModule } from './login/login.module';
import { TarjeteroModule } from './tarjetero/tarjetero.module';
import { ListaOpcionModule } from './listaopcion/listaopcion.module';
import { EpsModule } from './eps/eps.module';
import { NivelModule } from './nivel/nivel.module';
import { RegimenModule } from './regimen/regimen.module';
import { SexoBiologicoModule } from './sexobiologico/sexobiologico.module';
import { DocumentoModule } from './documento/documento.module';
import { TipoProfesionalModule } from './tipoprofesional/tipoprofesional.module';
import { CupsModule } from './cups/cups.module';
import { GruposModule } from './grupos/grupos.module';
import { PruebasModule } from './pruebas/pruebas.module';
import { ProcedimientosModule } from './procedimientos/procedimientos.module';
import { PruebasOpcionesModule } from './pruebasopciones/pruebasopciones.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://senasoftmd:tatiycathe1234@cluster0.g5kvf.mongodb.net/medisMD'),
    PacienteModule,
    OrdenLaboratorioModule,
    ProfesionalModule,
    ResultadosModule,
    LoginModule,
    TarjeteroModule,
    ListaOpcionModule,
    EpsModule,
    NivelModule,
    RegimenModule,
    SexoBiologicoModule,
    DocumentoModule,
    TipoProfesionalModule,
    CupsModule,
    GruposModule,
    PruebasModule,
    PruebasOpcionesModule,
    ProcedimientosModule  // Este módulo debe estar importado para que "ResultadosModel" esté disponible.
  ],
  controllers: [AppController],
  providers: [AppService],  // Elimina `ResultadosService` si solo está siendo usado dentro de su propio módulo
})
export class AppModule {}
