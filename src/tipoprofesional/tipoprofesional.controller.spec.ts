import { Test, TestingModule } from '@nestjs/testing';
import { TipoprofesionalController } from './tipoprofesional.controller';

describe('TipoprofesionalController', () => {
  let controller: TipoprofesionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoprofesionalController],
    }).compile();

    controller = module.get<TipoprofesionalController>(TipoprofesionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
