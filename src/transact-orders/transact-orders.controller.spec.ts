import { Test, TestingModule } from '@nestjs/testing';
import { TransactOrdersController } from './transact-orders.controller';

describe('TransactOrdersController', () => {
  let controller: TransactOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactOrdersController],
    }).compile();

    controller = module.get<TransactOrdersController>(TransactOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
