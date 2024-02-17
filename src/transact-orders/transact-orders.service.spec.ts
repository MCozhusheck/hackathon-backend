import { Test, TestingModule } from '@nestjs/testing';
import { TransactOrdersService } from './transact-orders.service';

describe('TransactOrdersService', () => {
  let service: TransactOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactOrdersService],
    }).compile();

    service = module.get<TransactOrdersService>(TransactOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
