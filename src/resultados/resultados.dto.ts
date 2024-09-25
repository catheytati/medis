import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { TipoDeResultado } from '../resultados/enums/tipo-de-resultado.enum';  // Importa el enum
import { IPaciente } from 'src/paciente/paciente.modelo'; // Importa la interfaz IPaciente
import { IOrden_Laboratorio } from 'src/orden_laboratorio/orden_laboratorio.modelo';
import { IProcedimientos } from 'src/procedimientos/procedimientos.modelo';
import { IPruebas } from 'src/pruebas/pruebas.modelo';
import { IPruebasOpciones } from 'src/pruebasopciones/pruebasopciones.modelo';


export class ResultadosDto {
    @IsNotEmpty()
    id: number; // ID del resultado

    @IsNotEmpty()
    Fecha_resultado: Date; // Fecha del resultado

    @IsNotEmpty()
    Num_procesamiento: string; // Número de procesamiento

    @IsEnum(TipoDeResultado, { message: 'Tipo de resultado inválido' })
    @IsNotEmpty()
    Tipo_de_resultado: TipoDeResultado; // Tipo de resultado

    @IsNotEmpty()
    Paciente: IPaciente; // Información del paciente

    @IsNotEmpty()
    id_orden: IOrden_Laboratorio; // ID de la orden de laboratorio

    @IsNotEmpty()
    id_procedimiento: IProcedimientos; // ID del procedimiento

    @IsNotEmpty()
    id_prueba: IPruebas; // ID de la prueba

    @IsNotEmpty()
    id_pruebasopciones: IPruebasOpciones; // ID de las opciones de prueba

    @IsOptional()
    res_opcion: string; // Resultado como opción

    @IsOptional()
    res_numerico: number; // Resultado numérico

    @IsOptional()
    res_texto: string; // Resultado en texto

    @IsOptional()
    res_memo: string; // Resultado en forma de memo

    @IsNotEmpty()
    num_procesamientos: number; // Número de procesamientos
}
