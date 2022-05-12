const express = require("express");
const content = express.Router();

const { getAllContent } = require("../queries/content");

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

module.exports = content;
