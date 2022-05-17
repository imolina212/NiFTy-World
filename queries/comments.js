const db = require("../db/dbConfig.js");

const getAllComments = async () => {
  try {
    const allComments = await db.any("SELECT * FROM comments");
    return allComments;
  } catch (error) {
    return error;
  }
};

const getComment = async (id) => {
  try {
    const content = await db.one("SELECT * FROM content WHERE id=$1", id);
    return content;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllComments,
  getComment,
};
