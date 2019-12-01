const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const LearningUnitSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  duration: {
    type: String
  },
  module_id: {
    type: Schema.ObjectId,
    ref: 'LearningModule'
  }
});

module.exports = mongoose.model("learningunit", LearningUnitSchema);
