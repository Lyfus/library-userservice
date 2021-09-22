import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis-server',
        port: 6379
      }
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
