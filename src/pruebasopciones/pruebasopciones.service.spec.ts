import { Test, TestingModule } from '@nestjs/testing';
import { PruebasopcionesService } from './pruebasopciones.service';

describe('PruebasopcionesService', () => {
  let service: PruebasopcionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebasopcionesService],
    }).compile();

    service = module.get<PruebasopcionesService>(PruebasopcionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
