import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rent } from './entities/rent.entity';
import { CreateRentDto } from './dto/create-rent.dto';

@Injectable()
export class RentService {
  constructor(@InjectModel(Rent.name) private rentModel: Model<Rent>) {}

  async create(createRentDto: CreateRentDto): Promise<Rent> {
    const rent = new this.rentModel(createRentDto);
    return rent.save();
  }

  async findAll(): Promise<Rent[]> {
    return this.rentModel.find().exec();
  }

  async findOne(id: string): Promise<Rent> {
    return this.rentModel.findById(id).exec();
  }

  async update(id: string, updateRentDto: CreateRentDto): Promise<Rent> {
    return this.rentModel.findByIdAndUpdate(id, updateRentDto, { new: true });
  }

  async delete(id: string): Promise<Rent> {
    return this.rentModel.findByIdAndDelete(id);
  }
}
