const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnswerSchema = require('./Answer').schema;

// Create schema
const QuestionSchema = new Schema({
  questionString: {
    type: String
  },
  questionType: {
    type: String
  },
  answers: {
    type: [AnswerSchema]
  },
  learningUnitId: {
    type: Schema.ObjectId,
    ref: "LearningUnit"
  }
});

module.exports = mongoose.model("question", QuestionSchema);
