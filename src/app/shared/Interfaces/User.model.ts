import { Role } from '../enums/Role.enum';
import { DefaultDeclaration } from './DefaultDeclaration.model';
import { Departament } from './Departament.model';

export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  // department: Departament;
  // title: string;
  // defaultDeclaration: DefaultDeclaration;
  // subordinates: string[];
  // roles: Role[];
}
