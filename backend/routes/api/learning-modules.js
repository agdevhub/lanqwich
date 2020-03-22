const express = require("express");
const router = express.Router();

// LearningModule model
const LearningModule = require("../../models/LearningModule");
const LearningUnit = require("../../models/LearningUnit");

// Get all modules
router.get("/", (req, res) => {
  LearningModule.find().then(modules => {
    res.json(modules);
  });
});

// Add new model
router.post('/', (req, res) => {
  const newLearningModule = new LearningModule({
      name: req.body.name,
      desc: req.body.desc
  });

  newLearningModule.save().then(module => res.json(module));    
});

// Get module by id
router.get("/:learningModuleId", (req, res) => {
  // refactor Mongoose models
  LearningUnit.find({ module_id: req.params.learningModuleId }).then(units => {
    res.json(units);
  });
});

module.exports = router;
