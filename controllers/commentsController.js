const express = require("express");
const { getAllComments, getComments } = require("../queries/comments");
const comments = express.Router();

comments.get("/", async (_, response) => {
  console.log("GET request to /comments");
  const allComments = await getAllComments();
  if (allComments.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allComments);
});

comments.get("/:id", async (req, res) => {
  const comment = await getComment(req.params.id);
  res.status(200).json(comment);
});

module.exports = comments;
