const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED");
  } catch (err) {
    console.error("DB ERROR", err);
    process.exit(1); // stop server if DB connection fails
  }
};

module.exports = connectDB;
