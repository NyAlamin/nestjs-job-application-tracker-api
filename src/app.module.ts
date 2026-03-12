import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { AuthModule } from './auth/auth.module';

import { User } from './users/user.entity';
import { Job } from './jobs/job.entity';
import { Application } from './applications/application.entity';

@Module({
  imports: [
    // Database setup
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '00000', // change to your DB password
      database: 'jobtracker',
      autoLoadEntities: true,
      synchronize: true, // auto create tables
    }),

    // Feature modules
    UsersModule,
    JobsModule,
    ApplicationsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}