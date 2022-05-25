const express = require("express");
const { getAllQuestions, getQuiz } = require("../queries/questions");

const questions = express.Router({ mergeParams: true });

questions.get("/", async (req, res) => {
  const questions = await getAllQuestions(req.params.id);
  res.status(200).json(questions);
});

questions.get("/:id", async (req, res) => {
  const quiz = await getQuiz(req.params.id);
  res.status(200).json(quiz);
});

module.exports = questions;
