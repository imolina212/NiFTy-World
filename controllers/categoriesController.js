const express = require("express");
const categories = express.Router({ mergeParams: true });
const lessonsController = require("./lessonsController");

const { getAllCategories, getCategory } = require("../queries/categories");

categories.use("/:id/lessons", lessonsController);

// All Categories
categories.get("/", async (_, response) => {
  console.log("GET request to /category");
  const allCategories = await getAllCategories();
  if (allCategories.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allCategories);
});

//Specific Category
categories.get("/:id", async (req, res) => {
  const category = await getCategory(req.params.id);
  res.status(200).json(category);
});

module.exports = categories;
