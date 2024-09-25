import { Test, TestingModule } from '@nestjs/testing';
import { SexoBiologicoController } from './sexobiologico.controller';

describe('SexobiologicoController', () => {
  let controller: SexoBiologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexoBiologicoController],
    }).compile();

    controller = module.get<SexoBiologicoController>(SexoBiologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
