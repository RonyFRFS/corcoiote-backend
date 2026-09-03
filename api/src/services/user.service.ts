import users from '../mocks/user.mock.ts';
import type { User } from '../types/user.types.ts';

export function findAllUsers(): User[] {
  return users;
}



