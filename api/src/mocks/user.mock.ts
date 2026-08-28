import type { User } from "../types/user.types.ts";

const users: User[] = [{
  id: 1,
  name: 'Ronald',
  email: 'ronald@email.com',
  password: crypto.randomUUID()
}, {
 id:2,
 name: 'Emilia',
 email: 'emilia@email.com',
 password: crypto.randomUUID()
}, {
  id:3,
  name: 'frederico',
  email: 'frederico@email.com',
  password: crypto.randomUUID()
}];

export default users;