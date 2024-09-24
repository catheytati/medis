import { IsNotEmpty, IsEnum } from 'class-validator';
import { TipoDeResultado } from '../resultados/enums/tipo-de-resultado.enum';  // Importa el enum
import { IPaciente } from 'src/paciente/paciente.modelo';

export class ResultadosDto {
  @IsNotEmpty()
  Fecha_resultado: Date;

  @IsNotEmpty()
  Num_procesamiento: string;

  @IsEnum(TipoDeResultado, { message: 'Tipo de resultado inválido' })
  @IsNotEmpty()
  Tipo_de_resultado: TipoDeResultado;  // Nuevo campo con lista desplegable
  Paciente:IPaciente
}
