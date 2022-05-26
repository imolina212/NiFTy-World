const express = require("express");
const lessons = express.Router();
const questionsController = require("./questionsController");

const { getAllLessons , getLessons } = require("../queries/lessons");

lessons.use("/:id/questions", questionsController);

// All Lessons
lessons.get("/", async (_, response) => {
  console.log("GET request to /lesson");
  const allLessons = await getAllLessons();
  if (allLessons.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allLessons);
});

// Specific lesson
lessons.get("/:id", async (req, res) => {
  const lessons = await getLessons(req.params.id);
  res.status(200).json(lessons);
});

//Specific lesson
// lessons.get("/:id", async (req, res) => {
//   const lesson = await getLesson(req.params.id);
//   res.status(200).json(lesson);
// });

module.exports = lessons;
