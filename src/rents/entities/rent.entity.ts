import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type UserDocument = HydratedDocument<Rent>;

@Schema()
export class Rent {
  @Prop({ required: true }) propertyName: string;

  @Prop({ required: true }) amount: number;

  @Prop({ required: true }) address: string;

  @Prop({ required: true, enum: ['available', 'rented', 'closed'] })
  status: string;

  @Prop({ required: true }) size: number;

  @Prop() testimonies: string[];

  @Prop() propertyImages: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  postedBy: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  boughtBy: User;

  @Prop() duration: number;
}

export const RentSchema = SchemaFactory.createForClass(Rent);
