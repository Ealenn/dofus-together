import { User } from '../models/user';

export const IAuthServiceToken = 'IAuthServiceToken';

export interface IAuthService {
  validateUser(username: string, password: string): Promise<User>;
  getJwt(user: User): Promise<string>;
}
