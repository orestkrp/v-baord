import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Enitity {
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    unique: true,
    auto: true,
  })
  _id: Types.ObjectId;
}
