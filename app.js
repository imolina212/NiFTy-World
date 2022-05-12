const express = require("express");
const app = express();
const cors = require("cors");

// const contentController = require("./");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Welcome to NiFTY World Backend");
});

// app.use("/")

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app