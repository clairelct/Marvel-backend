require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const md5 = require("md5");
const uid2 = require("uid2");

const app = express();
app.use(cors());

// API Key Marvel
const api_public_key = process.env.MARVEL_API_PUBLIC_KEY;
const api_private_key = process.env.MARVEL_API_PRIVATE_KEY;

app.get("/", async (req, res) => {
  res.status(200).json(response.data);
});

app.get("/characters", async (req, res) => {
  try {
    const ts = uid2(8);
    const hash = md5(ts + api_private_key + api_public_key);

    let limit = Number(req.query.limit);

    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${api_public_key}&hash=${hash}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page doesn't exists!" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on Port 3001");
});
