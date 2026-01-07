const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // no extra options
    console.log("DB CONNECTED");
  } catch (err) {
    console.log("DB ERROR", err);
  }
};

module.exports = connectDB;
