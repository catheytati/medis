import { Test, TestingModule } from '@nestjs/testing';
import { TarjeteroController } from './tarjetero.controller';

describe('TarjeteroController', () => {
  let controller: TarjeteroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarjeteroController],
    }).compile();

    controller = module.get<TarjeteroController>(TarjeteroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
