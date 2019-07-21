const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const learningmodules = require("./routes/api/learning-modules");
const learningunits = require("./routes/api/learning-units");

const app = express();

app.use(cors())

// connect to database
connectDB();

// body-parser middleware
app.use(bodyParser.json());

// use routes
app.use("/api/learning-modules", learningmodules);
app.use("/api/learning-units", learningunits);

var path = require('path');
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT | 5000;

app.listen(port, () => console.log("Express server started on port: " + port));
