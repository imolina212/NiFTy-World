const db = require("../db/dbConfig.js");

const getAllQuizzes = async () => {
  try {
    const allQuizzes = await db.any("SELECT * FROM quizzes");
    return allQuizzes;
  } catch (error) {
    return error;
  }
};

const getQuiz = async (id) => {
  try {
    const quiz = await db.one("SELECT * FROM quizzes WHERE id=$1", id)
    return quiz
  } catch (error) {
      throw error;
  }
}


module.exports = {
  getAllQuizzes,
  getQuiz
};
