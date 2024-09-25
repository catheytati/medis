import { Test, TestingModule } from '@nestjs/testing';
import { ListaOpcionController } from './listaopcion.controller';

describe('ListaopcionController', () => {
  let controller: ListaOpcionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaOpcionController],
    }).compile();

    controller = module.get<ListaOpcionController>(ListaOpcionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
