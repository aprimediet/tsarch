import mongoose from 'mongoose';

export async function open(): Promise<void> {
  try {
    const mongoUri = `${process.env.MONGODB_URI || 'mongodb://localhost:27017/tsarch'}`;

    console.log(mongoUri);

    await mongoose.connect(mongoUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('connected to database');
  } catch (error: any) {
    console.error(error);
  }
}

export async function close(): Promise<void> {
  await mongoose.connection.removeAllListeners();
  await mongoose.disconnect();
}
