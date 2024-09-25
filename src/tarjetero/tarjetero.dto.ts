import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { IEps } from 'src/eps/eps.modelo';
import { INivel } from 'src/nivel/nivel.modelo';
import { IPaciente } from 'src/paciente/paciente.modelo';
import { IRegimen } from 'src/regimen/regimen.modelo';

export class TarjeteroDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  historia: string;

  @IsNotEmpty()
  id_paciente: IPaciente;

  @IsNotEmpty()
  id_regimen: IRegimen;

  @IsNotEmpty()
  id_eps: IEps;

  @IsNotEmpty()
  id_nivel: INivel;
}
