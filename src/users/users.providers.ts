import { User } from '../database/Entities/user/user.entity';

export const UsersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];