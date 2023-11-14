import { PrismaClientService } from './prisma-client.service';

describe('PrismaClientService', () => {
  let prismaClientService: PrismaClientService;

  beforeEach(() => {
    prismaClientService = new PrismaClientService();
  });

  afterEach(async () => {
    await prismaClientService.onModuleDestroy();
  });

  it('should create an instance of PrismaClientService', () => {
    expect(prismaClientService).toBeDefined();
  });

  it('should call onModuleInit and connect to the Prisma database', async () => {
    const connectSpy = jest.spyOn(prismaClientService, '$connect');

    await prismaClientService.onModuleInit();

    expect(connectSpy).toHaveBeenCalled();
  });

  it('should call onModuleDestroy and disconnect from the Prisma database', async () => {
    const disconnectSpy = jest.spyOn(prismaClientService, '$disconnect');

    await prismaClientService.onModuleDestroy();

    expect(disconnectSpy).toHaveBeenCalled();
  });
});
