import mongoose from "mongoose";


const uri = " mongodb+srv://admin:Luffy@2000@bluelock.2zd2e0x.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Mongo connect error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
