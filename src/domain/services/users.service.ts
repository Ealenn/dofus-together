import { User } from '../models/user';

export const IUsersServiceToken = 'IUsersService';

export interface IUsersService {
  get(username: string): Promise<User>;
}
