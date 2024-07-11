import { User } from '@repo/types';

export class CreateUserDTO implements User {
  email: string;
  username: string;
  password: string;
}
