const db = require("../db/dbConfig.js");

const getAllLessons = async () => {
  try {
    const allLessons = await db.any("SELECT * FROM lessons");
    return allLessons;
  } catch (error) {
    return error;
  }
};

const getLessons = async (id) => {
  try {
    const lessons = await db.any("SELECT * FROM lessons WHERE lessons.categories_id=$1", id);
    return lessons;
  } catch (error) {
    throw error;
  }
};

// const getLesson = async (id) => {
//   try {
//     const lessons = await db.one("SELECT * FROM lessons WHERE id=$1", id);
//     return lessons;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  getAllLessons,
  getLessons,
  // getLesson
};
