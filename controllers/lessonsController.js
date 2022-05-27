const express = require("express");
const lessons = express.Router({ mergeParams: true });
const questionsController = require("./questionsController");

const { getLessons, getLesson } = require("../queries/lessons");

lessons.use("/:id/questions", questionsController);

// All Lessons
// lessons.get("/", async (_, response) => {
//   console.log("GET request to /lesson");
//   const allLessons = await getAllLessons();
//   if (allLessons.length === 0) {
//     response.status(500).json({ error: "server error" });
//     return;
//   }
//   response.status(200).json(allLessons);
// });

lessons.get("/", async (req, res) => {
  const lessons = await getLessons(req.params.id);
  res.status(200).json(lessons);
});

// lessons.get("/:id", async (req, res) => {
//   const lessons = await getLessons(req.params.id);
//   res.status(200).json(lessons);
// });

lessons.get("/:id", async (req, res) => {
  try {
    const lesson = await getLesson(req.params.id);
    res.status(200).json(lesson);
  } catch (err) {
    res.status(500).json({ err: "No lessons" });
  }
});

module.exports = lessons;
