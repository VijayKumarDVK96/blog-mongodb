// config/db.js
import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://localhost:27017/mongo-blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDB;
