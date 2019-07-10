const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const LearningModuleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String
  }
});

module.exports = mongoose.model("learningmodule", LearningModuleSchema);
