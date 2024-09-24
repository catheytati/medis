import { Test, TestingModule } from '@nestjs/testing';
import { OrdenLaboratorioService } from './orden_laboratorio.service';

describe('OrdenLaboratorioService', () => {
  let service: OrdenLaboratorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenLaboratorioService],
    }).compile();

    service = module.get<OrdenLaboratorioService>(OrdenLaboratorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
