import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Rent } from 'src/rents/entities/rent.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  phonenumber: string;

  @Prop()
  password: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Rent' })
  rentsPosted: Rent[];

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Rent' })
  rentsBought: Rent[];
}

export const UserSchema = SchemaFactory.createForClass(User);
