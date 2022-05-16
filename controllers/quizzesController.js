const express = require("express")
const { getAllQuizzes, getQuiz
} = require("../queries/quizzes")

const quizzes = express.Router({mergeParams: true });

quizzes.get("/", async (req, res) => {
    const quizzes = await getAllQuizzes(req.params.id);
    res.status(200).json(quizzes)
})

quizzes.get("/:id", async (req, res) => {
    const quiz = await getQuiz(req.params.id);
    res.status(200).json(quiz)
})

module.exports = quizzes