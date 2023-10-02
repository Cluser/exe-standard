import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: []
    }).compile();
    app;
  });
});
