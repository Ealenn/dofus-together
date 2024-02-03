import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/models/user';
import { IUsersService } from 'src/domain/services/users.service';

@Injectable()
export class UsersService implements IUsersService {
  private readonly users: User[] = [
    {
      Id: '1',
      username: 'string',
      password: 'string',
    },
  ];

  public async get(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      return null;
    }
    return user;
  }
}
