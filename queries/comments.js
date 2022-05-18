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
    const comments = await db.one("SELECT * FROM comments WHERE id=$1", id);
    return comments;
  } catch (error) {
    throw error;
  }
};

const createComment = async (newComment) => {
  try {
    const createdComment = await db.one(
      "INSERT INTO comments (name, post, date) VALUES ($1, $2, $3) RETURNING *",
      [newComment.name, newComment.post, newComment.date]
    );
    return createdComment;
  } catch (err) {
    return err;
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE id=$1 RETURNING *",
      id
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  getComment,
  createComment,
  deleteComment,
};
