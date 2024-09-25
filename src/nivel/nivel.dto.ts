import { IEps } from "src/eps/eps.modelo";
import { IRegimen } from "src/regimen/regimen.modelo";

export class NivelDto {
    id: number;
    id_eps: IEps; 
    nivel: string;
    nombre: string;
    id_regimen: IRegimen; 
  }
  