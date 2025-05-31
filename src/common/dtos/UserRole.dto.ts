import { ROLES } from '../enums/roles.enum';

export type UserRoleDto = {
  roles: {
    id: string;
    name: ROLES;
  };
};

export type AuthenticatedUserDto = {
  id: string;
  email: string;
  roles: string;
};

export interface TokenPayload {
  sub: string;
  email: string;
}

export interface ContextWithUser {
  user?: {
    id: string;
    email: string;
    roles: string[];
  };
  req?: Request;
}

export interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

export type SignInData = { userId: string; email: string };
