const express = require("express");
const router = express.Router();

const LearningUnit = require("../../models/LearningUnit");

// // Add new learning unit
// router.post("/", (req, res) => {
//   const newLearningUnit = new LearningUnit({
//     name: req.body.name,
//     content: req.body.content,
//     duration: req.body.duration,
//     module_id: req.body.module_id
//   });

//   newLearningUnit.save().then(unit => res.json(unit));
// });

router.post("/", (req, res) => {
//   LearningUnit.update({_id: req.params.learningUnitId}, {
//     content: req.params.tinyContent,
//   }, function(err, numberAffected, rawResponse) {
//     console.log('error happened here');
//  });
  
  // LearningUnit.find({ _id: req.params.learningUnitId }).then(unit => {
  //   unit.content = req.params.tinyContent;
  //   unit.save();
  //   res.json(unit);
  //   console.log(units);
  // });
  console.log('I am here ' + req.query.learningUnitId + ' ' + req.query.tinyContent);
  LearningUnit.updateOne({_id: req.query.learningUnitId}, {content: req.query.tinyContent}, function(err, user) {
    console.log(err)
  });
  res.json('gelede');
});

module.exports = router;
