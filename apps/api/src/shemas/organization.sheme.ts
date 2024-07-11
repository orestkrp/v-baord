import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Enitity } from './entity.sheme';

export type ConversationDocument = HydratedDocument<Organization>;

@Schema({ timestamps: true, versionKey: false })
export class Organization extends Enitity {
  @Prop({ required: true })
  name: string;

  @Prop()
  image?: string;

  @Prop({
    type: [{ type: SchemaTypes.ObjectId, ref: 'User' }],
    required: true,
  })
  participants?: Types.ObjectId[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
