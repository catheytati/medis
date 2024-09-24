import { Test, TestingModule } from '@nestjs/testing';
import { HistoriaService } from './historia.service';

describe('HistoriaService', () => {
  let service: HistoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoriaService],
    }).compile();

    service = module.get<HistoriaService>(HistoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
