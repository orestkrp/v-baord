import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Enitity } from './entity.sheme';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User extends Enitity {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  image?: string;

  @Prop({
    type: [{ type: SchemaTypes.ObjectId, ref: 'Organization' }],
    required: true,
  })
  organizations?: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
