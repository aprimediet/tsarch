import { Document } from 'mongoose';

export enum EUserStatus {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export type TUser = {
  email: string;
  password?: string;
  fullname?: string;
  status?: EUserStatus;
};

export interface IUserDocument extends TUser, Document {}
