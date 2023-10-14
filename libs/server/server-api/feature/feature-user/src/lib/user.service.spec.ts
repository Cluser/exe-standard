import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { PrismaClientService } from '@exe/server/shared/prisma-client';
import { UserGetDto, UserUpdateDto, UserCreateDto } from './dtos';

describe('UserService', () => {
  let service: UserService;
  let prismaClientService: PrismaClientService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaClientService]
    }).compile();

    service = module.get<UserService>(UserService);
    prismaClientService = module.get<PrismaClientService>(PrismaClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const userGet: UserGetDto = { id: 1, name: 'John', surname: 'Doe' };
      const expectedResult: User[] = [{ id: 1, name: 'John', surname: 'Doe' }];

      jest.spyOn(prismaClientService.user, 'findMany').mockResolvedValue(expectedResult);

      const result = await service.getUsers(userGet);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const id = 1;
      const userUpdateDto: UserUpdateDto = { id: 1, name: 'UpdatedName', surname: 'UpdatedSurn' };

      const expectedResult: User = { id: 1, name: 'UpdatedName', surname: 'Doe' };

      jest.spyOn(prismaClientService.user, 'update').mockResolvedValue(expectedResult);

      const result = await service.updateUser(id, userUpdateDto);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userCreateDto: UserCreateDto = { id: 1, name: 'John', surname: 'Doe' };

      const expectedResult: User = { id: 1, name: 'John', surname: 'Doe' };

      jest.spyOn(prismaClientService.user, 'create').mockResolvedValue(expectedResult);

      const result = await service.createUser(userCreateDto);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const expectedResult: User = { id: 1, name: 'John', surname: 'Doe' };

      jest.spyOn(prismaClientService.user, 'delete').mockResolvedValue(expectedResult);

      const result = await service.deleteUser();

      expect(result).toEqual(expectedResult);
    });
  });
});
