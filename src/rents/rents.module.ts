import { Module } from '@nestjs/common';
import { RentService } from './rents.service';
import { RentsController } from './rents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './entities/rent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rent.name, schema: RentSchema }]),
  ],
  providers: [RentService],
  controllers: [RentsController],
  exports: [RentService],
})
export class RentsModule {}
