import { Test, TestingModule } from '@nestjs/testing';
import { MundialController } from './mundial.controller';

describe('MundialController', () => {
  let controller: MundialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MundialController],
    }).compile();

    controller = module.get<MundialController>(MundialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
