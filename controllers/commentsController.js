const express = require("express");
const {
  getAllComments,
  getComment,
  createComment,
  deleteComment,
  updateComment,
} = require("../queries/comments");
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

comments.post("/", async (req, res) => {
  const comment = await createComment(req.body);
  res.status(200).json(comment);
});

comments.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await deleteComment(req.params.id);
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json({ err: "No comments to show" });
  }
});

// comments.put("/:id", async (req, res) => {
//   try {
//     const comment = await updateComment(req.params.id, req.body);
//     res.status(200).json(comment);
//   } catch (error) {
//     res.status(400).json({ error: "Comment not found" });
//   }
// });

comments.put("/:id", async (req, res) => {
  console.log("UPDATE req to /comments/:id");
  const updatedComment = await updateComment(req.params.id, req.body);
  if (updatedComment.id) {
    res.status(200).json(updatedComment);
  } else {
    res.status(404).json("Comment does not exist");
  }
});

module.exports = comments;
