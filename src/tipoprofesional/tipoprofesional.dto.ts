import { IsEnum } from 'class-validator';

export enum TipoProfesionalEnum {
    MEDICINA_INTERNA = 'medicina interna',
    MEDICINA_GENERAL = 'medicina general',
    MEDICO_FAMILIAR = 'medico familiar',
    MEDICO_ESPECIALISTA = 'medico especialista',
}

export class TipoProfesionalDto {
    id: number;

    @IsEnum(TipoProfesionalEnum)
    tipo_profesional: TipoProfesionalEnum; // Lista desplegable
}
