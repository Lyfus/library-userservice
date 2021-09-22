import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis-server',
        port: 6379
      }
    }),
    BullModule.registerQueue({
      name: 'user',
      redis: {
        host: "redis-server",
        port: 6379,
      },
    }),
      DatabaseModule,
    ],
  controllers: [UserController],
  providers: [
    UsersService, 
        ...UsersProviders,
  ],
})
export class UsersModule {}