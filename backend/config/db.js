const mongoose = require("mongoose");
const db = require("./keys").mongoURI;

// Connect to Mongo
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    //console.log("Connected to MongoDB...");
  } catch (err) {
    //console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
