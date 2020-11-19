require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Import des routes
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

app.get("/", async (req, res) => {
  res.status(200).json(response.data);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page doesn't exists!" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on Port 3001");
});
