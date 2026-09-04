import users from '../mocks/user.mock.ts';
import type { User } from '../types/user.types.ts';

export function findAllUsers(): User[] {
  return users;
}

export function findUserById(id: number): User {
   const user = users.find(user => user.id === id);

   if (!user) 
    throw new Error(`Usuario de id ${id} nao encontrado.`);

   return user;

  }

