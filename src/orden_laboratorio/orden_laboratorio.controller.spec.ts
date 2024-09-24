import { Test, TestingModule } from '@nestjs/testing';
import { OrdenLaboratorioController } from './orden_laboratorio.controller';

describe('OrdenLaboratorioController', () => {
  let controller: OrdenLaboratorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenLaboratorioController],
    }).compile();

    controller = module.get<OrdenLaboratorioController>(OrdenLaboratorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
