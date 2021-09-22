import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Injectable, Inject } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { User } from '../database/Entities/user/user.entity';

@Injectable()
@Processor('user')
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User
  ) {}

  async findOne(id): Promise<any> {
    return this.usersRepository.findOne<User>({
        where: { id }
    })
  }

  async login(credentials: any): Promise<User> {
    return this.usersRepository.findOne<User>({
      attributes: ['id', 'firstName', 'lastName', 'nbrDamagedBooks', 'nbrBorrowedBooks'],
      where: {
        login: credentials.login,
        password: credentials.password
      }
    }
    );
  }

  @Process('incrementUserBooks')
  async incrementUserBooks(job: Job<any>) {
    this.findOne(job.data.userId)
    .then(user => {
      let foundUser = user.dataValues;
      foundUser.NbrBorrowedBooks++;

      this.usersRepository.update(foundUser, { where: { id: job.data.userId }});
    })
  }

  @Process('addPenalitiesToUser')
  async addPenalitiesTo(job: Job<any>) {
    this.findOne(job.data.book.borrowedBy)
    .then(user => {
      let foundUser = user.dataValues;
      foundUser.NbrDamagedBooks++;

      this.usersRepository.update(foundUser, { where: { id: job.data.book.borrowedBy}});
    })
  }
}