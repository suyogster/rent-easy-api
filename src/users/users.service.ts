import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(email: string, updateUserDto: CreateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ email }, updateUserDto, {
      new: true,
    });
  }

  async delete(email: string): Promise<User> {
    return this.userModel.findOneAndDelete({ email });
  }
}
