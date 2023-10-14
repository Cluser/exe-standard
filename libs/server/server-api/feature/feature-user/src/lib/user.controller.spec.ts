import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserCreateDto, UserGetDto, UserUpdateDto } from './dtos';
import { User } from '@prisma/client';
import { PrismaClientModule } from '@exe/server/shared/prisma-client';
import { AuthKeycloakModule } from '@exe/server/shared/auth-keycloak';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaClientModule, AuthKeycloakModule],
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('getUsers', () => {
    it('should return a paginated response of users', async () => {
      const userGetDto: UserGetDto = { id: 1, name: 'John', surname: 'Smith' };

      const mockUsers: User[] = [{ id: 1, name: 'John', surname: 'Smith' }];
      jest.spyOn(userService, 'getUsers').mockResolvedValue(mockUsers);

      const result = await userController.getUsers(userGetDto);

      expect(result.data).toEqual(mockUsers);
      expect(result.totalCount).toBe(mockUsers.length);
    });
  });

  describe('updateUser', () => {
    it('should update a user and return the updated user', async () => {
      const userId = 1;
      const userUpdateDto: UserUpdateDto = { id: 1, name: 'John', surname: 'Stalone' };

      const updatedUser: User = { id: 1, name: 'John', surname: 'Stalone' };
      jest.spyOn(userService, 'updateUser').mockResolvedValue(updatedUser);

      const result = await userController.updateUser(userId, userUpdateDto);

      expect(result).toEqual(updatedUser);
    });
  });

  describe('createUser', () => {
    it('should create a new user and return the created user', async () => {
      const userCreateDto: UserCreateDto = { id: 1, name: 'John', surname: 'Smith' };

      const createdUser: User = { id: 1, name: 'John', surname: 'Stalone' };
      jest.spyOn(userService, 'createUser').mockResolvedValue(createdUser);

      const result = await userController.createUser(userCreateDto);

      expect(result).toEqual(createdUser);
    });
  });
});
