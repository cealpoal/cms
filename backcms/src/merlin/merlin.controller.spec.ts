import { Test, TestingModule } from '@nestjs/testing';
import { MerlinController } from './merlin.controller';

describe('MerlinController', () => {
  let controller: MerlinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerlinController],
    }).compile();

    controller = module.get<MerlinController>(MerlinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
