const express = require("express");
const content = express.Router();
const quizzesController = require("./quizzesController")

const { getAllContent , getContent} = require("../queries/content");

content.use("/:id/quizzes", quizzesController)

// All Content
content.get("/", async (_, response) => {
  console.log("GET request to /content");
  const allContent = await getAllContent();
  if (allContent.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allContent);
});

//Specific Content
content.get("/:id", async (req, res) => {
  const content = await getContent(req.params.id);
  res.status(200).json(content)
})

module.exports = content;
