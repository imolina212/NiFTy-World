const db = require("../db/dbConfig.js");

// const getAllQuestions = async () => {
//   try {
//     const allQuestions = await db.any("SELECT * FROM questions");
//     return allQuestions;
//   } catch (error) {
//     return error;
//   }
// };

const getQuestion = async (id) => {
  try {
    const question = await db.one("SELECT * FROM questions WHERE id=$1", id);
    return question;
  } catch (error) {
    throw error;
  }
};

const getQuestions = async (id) => {
  try {
    const allQuestions = await db.any(
      "SELECT * FROM questions WHERE questions.lessons_id=$1",
      id
    );
    return allQuestions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  // getAllQuestions,
  getQuestion,
  getQuestions
};
