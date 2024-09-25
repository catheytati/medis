import { Test, TestingModule } from '@nestjs/testing';
import { PruebasopcionesController } from './pruebasopciones.controller';

describe('PruebasopcionesController', () => {
  let controller: PruebasopcionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebasopcionesController],
    }).compile();

    controller = module.get<PruebasopcionesController>(PruebasopcionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
