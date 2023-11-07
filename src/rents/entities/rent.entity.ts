import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const RentSchema = SchemaFactory.createForClass(Rent);
