import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RentsModule } from './rents/rents.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://renteasy:root123@renteasy.feecusp.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
    RentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
