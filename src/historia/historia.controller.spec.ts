import { Test, TestingModule } from '@nestjs/testing';
import { HistoriaController } from './historia.controller';

describe('HistoriaController', () => {
  let controller: HistoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoriaController],
    }).compile();

    controller = module.get<HistoriaController>(HistoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
