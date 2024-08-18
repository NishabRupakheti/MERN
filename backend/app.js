const express = require("express");
const postRoutes = require("./src/routes/postRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);

module.exports = app;
