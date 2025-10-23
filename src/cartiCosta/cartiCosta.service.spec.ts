import { Test, TestingModule } from '@nestjs/testing';
import { CartasMagicasService } from './cartas-magicas.service';

describe('CartasMagicasService', () => {
  let service: CartasMagicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartasMagicasService],
    }).compile();

    service = module.get<CartasMagicasService>(CartasMagicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
