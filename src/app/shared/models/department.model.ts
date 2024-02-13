import { User } from './user.model';

export interface Department {
  name: string;
  users: User[];
}
