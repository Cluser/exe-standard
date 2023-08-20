import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  getUsers(): User {
    return {
      name: 'John',
      email: 'John@mail.com'
    } as User
  }
}
