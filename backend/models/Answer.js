const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answerString: {
    type: String
  },
  isCorrectAnswer: {
    type: Boolean,
    default: false
  },
  questionId: {
    type: Schema.ObjectId,
    ref: "Question"
  }
});

module.exports = mongoose.model("answer", AnswerSchema);
