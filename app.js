const express = require("express");
const app = express();
const cors = require("cors");

const lessonsController = require("./controllers/lessonsController");
const questionsController = require("./controllers/questionsController");
const commentsController = require("./controllers/commentsController");
const categoriesController = require("./controllers/categoriesController");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Welcome to NiFTY World Backend");
});

app.use("/lesson", lessonsController);
app.use("/question", questionsController);
app.use("/comment", commentsController);
app.use("/categorie", categoriesController);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
