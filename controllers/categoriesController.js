const express = require("express");
const categories = express.Router();
const lessonsController = require("./lessonsController");

const { getAllCategories, getCategory } = require("../queries/categories");

categories.use("/:id/lessons", lessonsController);

// All Categories
categories.get("/", async (_, response) => {
  try {
    const allCategories = await getAllCategories();
    response.status(200).json(allCategories);
  } catch (err) {
    response.status(500).json({ err: "No category" });
  }
});

//Specific Category
categories.get("/:id", async (req, res) => {
  try {
    const category = await getCategory(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ err: "No category here" });
  }
});

module.exports = categories;
