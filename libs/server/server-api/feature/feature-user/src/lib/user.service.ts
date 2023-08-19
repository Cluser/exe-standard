import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [
      { name: 'John', surname: 'Doe' },
      { name: 'Jane', surname: 'Doe' },
    ];
  }
}
