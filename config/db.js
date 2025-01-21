const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`MongoDB Database Error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
