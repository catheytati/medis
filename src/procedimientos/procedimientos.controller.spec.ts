import { Test, TestingModule } from '@nestjs/testing';
import { ProcedimientosController } from './procedimientos.controller';

describe('ProcedimientosController', () => {
  let controller: ProcedimientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcedimientosController],
    }).compile();

    controller = module.get<ProcedimientosController>(ProcedimientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
