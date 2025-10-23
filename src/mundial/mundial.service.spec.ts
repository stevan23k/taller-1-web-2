import { Test, TestingModule } from '@nestjs/testing';
import { MundialService } from './mundial.service';

describe('MundialService', () => {
  let service: MundialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MundialService],
    }).compile();

    service = module.get<MundialService>(MundialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
