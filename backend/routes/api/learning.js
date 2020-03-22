const express = require("express");
const router = express.Router();

const LearningUnit = require("../../models/LearningUnit");

// get unit in a given module
router.post("/modules/{moduleId}/units/{unitId}", (req, res) => {
  LearningUnit.updateOne(
    { _id: req.query.learningUnitId },
    { content: req.query.tinyContent },
    function(err, user) {
      //console.log(err)
    }
  );
  res.json("gelede");
});

router.get("/modules/:moduleId/units", (req, res) => {
  LearningUnit.find({ module_id: req.params.moduleId }).then(units => {
    res.json(units);
  });
});

module.exports = router;
