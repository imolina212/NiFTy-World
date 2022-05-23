const express = require("express");
const app = express();
const cors = require("cors");

const contentController = require("./controllers/contentController");
const quizzesController = require("./controllers/quizzesController");
const commentsController = require("./controllers/commentsController");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Welcome to NiFTY World Backend");
});

app.use("/content", contentController);
app.use("/quizzes", quizzesController);
app.use("/comments", commentsController);
// app.use("/comment

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
