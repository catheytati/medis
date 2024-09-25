import { Test, TestingModule } from '@nestjs/testing';
import { ListaopcionService } from './listaopcion.service';

describe('ListaopcionService', () => {
  let service: ListaopcionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaopcionService],
    }).compile();

    service = module.get<ListaopcionService>(ListaopcionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
