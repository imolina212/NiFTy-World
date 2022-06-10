const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

const lessonsController = require("./controllers/lessonsController");
const questionsController = require("./controllers/questionsController");
const commentsController = require("./controllers/commentsController");
const categoriesController = require("./controllers/categoriesController");

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Welcome to NiFTY World Backend");
});

app.use("/lessons", lessonsController);
app.use("/questions", questionsController);
app.use("/comments", commentsController);
app.use("/categories", categoriesController);

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
