const express = require("express");
const router = express.Router();

const LearningUnit = require("../../models/LearningUnit");

// Add new learning unit
router.post('/', (req, res) => {
  const newLearningUnit = new LearningUnit({
      name: req.body.name,
      content: req.body.content,
      duration: req.body.duration,
      module_id: req.body.module_id
  });

  newLearningUnit.save().then(unit => res.json(unit));
});

module.exports = router;
