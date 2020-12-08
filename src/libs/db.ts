import mongoose from 'mongoose';

export function open(callback?: any): void {
  try {
    const mongoUri = `${process.env.MONGO_URL || 'mongodb://localhost:27017/tsarch'}`;

    mongoose.connect(
      mongoUri,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      callback,
    );
  } catch (error: any) {
    console.error(error);
  }
}

export async function close(): Promise<void> {
  await mongoose.connection.removeAllListeners();
  await mongoose.disconnect();
}
