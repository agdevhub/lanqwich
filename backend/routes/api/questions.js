const express = require("express");
const router = express.Router();

const LearningUnit = require("../../models/LearningUnit");
const Question = require("../../models/Question");
const Answer = require("../../models/Answer");

// Add new question (to learning unit)
router.post("/", (req, res) => {
  const newQuestion = new Question({
    questionString: req.body.questionString,
    questionType: req.body.questionType,
    learningUnitId: req.body.learningUnitId
  });

  newQuestion.save().then(question => {
    const answers = req.body.answers;

    answers.map(answer => {
      const newAnswer = new Answer({
        answerString: answer.answerString,
        isCorrectAnswer: answer.isCorrectAnswer,
        questionId: question._id
      });

      newAnswer.save();
    });

    res.json(question);
  });
});

router.get("/:learningUnitId", async (req, res) => {
  let questions = await Question.find({
    learningUnitId: req.params.learningUnitId
  });
  
  const qs = questions.map(async question => {
    var answers = await Answer.find({ questionId: question._id });
    //question = { ...question, answers: answers };
    var temp_question = Object.assign({}, question._doc);
    temp_question.answers = answers;
    console.log(temp_question);
    return temp_question;
  });
  res.json(await Promise.all(qs));
});

module.exports = router;
