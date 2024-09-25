import { Test, TestingModule } from '@nestjs/testing';
import { TarjeteroService } from './tarjetero.service';

describe('TarjeteroService', () => {
  let service: TarjeteroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarjeteroService],
    }).compile();

    service = module.get<TarjeteroService>(TarjeteroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
