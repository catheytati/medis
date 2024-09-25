import { Test, TestingModule } from '@nestjs/testing';
import { TipoprofesionalService } from './tipoprofesional.service';

describe('TipoprofesionalService', () => {
  let service: TipoprofesionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoprofesionalService],
    }).compile();

    service = module.get<TipoprofesionalService>(TipoprofesionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
