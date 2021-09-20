import { Table, Column, Model, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Unique
  @Column
  login: string;

  @Column
  password: string;

  @Column
  NbrDamagedBooks: number;

  @Column
  NbrBorrowedBooks: number;

  // @Column
  // breed: string;
}