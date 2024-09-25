export enum TipoRegimen {
    REGIMEN_SUBSIDIADO = 'Régimen subsidiado',
    REGIMEN_CONTRIBUTIVO = 'Régimen contributivo',
    REGIMEN_ESPECIAL = 'Régimen especial',
    REGIMEN_EXCEPCION = 'Régimen de excepción',
    REGIMEN_POBLACIONAL = 'Régimen de salud poblacional',
}

export class RegimenDto {
    id: number;
    tipo_regimen: TipoRegimen; // Usando el enum
}
