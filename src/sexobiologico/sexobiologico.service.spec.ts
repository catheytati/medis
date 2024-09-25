import { Test, TestingModule } from '@nestjs/testing';
import { SexoBiologicoService } from './sexobiologico.service';

describe('SexobiologicoService', () => {
  let service: SexoBiologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SexoBiologicoService],
    }).compile();

    service = module.get<SexoBiologicoService>(SexoBiologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
