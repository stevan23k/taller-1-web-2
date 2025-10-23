import { Test, TestingModule } from '@nestjs/testing';
import { CartasMagicasController } from './cartas-magicas.controller';

describe('CartasMagicasController', () => {
  let controller: CartasMagicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartasMagicasController],
    }).compile();

    controller = module.get<CartasMagicasController>(CartasMagicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
