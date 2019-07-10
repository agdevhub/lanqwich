const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const learningmodules = require("./routes/api/learning-modules");

const app = express();

app.use(cors())

// connect to database
connectDB();

// body-parser middleware
app.use(bodyParser.json());

// use routes
app.use("/api/learning-modules", learningmodules);

const port = process.env.PORT | 5000;

app.listen(port, () => console.log("Express server started on port: " + port));
