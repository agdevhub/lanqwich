const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const learningmodules = require("./routes/api/learning-modules");
const learningunits = require("./routes/api/learning-units");
const questions = require("./routes/api/questions");
const learning = require("./routes/api/learning");

const app = express();

app.use(cors());

// connect to database
connectDB();

// body-parser middleware
app.use(bodyParser.json());

// use routes
app.use("/api/learning-modules", learningmodules);
app.use("/api/learning-units", learningunits);
app.use("/api/questions", questions);
app.use("/api/learning", learning);

// Passport middleware
app.use(passport.initialize()); // Passport config
require("./config/passport")(passport); // Routes
app.use("/api/users", users);

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT | 5000;

app.listen(port, () =>
  {}//console.log("Express server is running on port " + port + ".")
);
