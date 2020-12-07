import { EUserStatus, IUserDocument } from '@app/interfaces/user';
import { model, Schema } from 'mongoose';

export const schema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
    index: true,
  },
  fullname: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: EUserStatus.ACTIVE,
    enum: Object.values(EUserStatus),
  },
});

export default model<IUserDocument>('User', schema);
