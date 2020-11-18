require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const md5 = require("crypto-js/md5");
const uid2 = require("uid2");

const app = express();
app.use(formidable());
app.use(cors());

// Mongoose Connect

// API Key Marvel
const api_public_key = "5fd2cb59d8899a22b144ecd899807d86";
const api_private_key = process.env.MARVEL_API_PRIVATE_KEY;

app.get("/", async (req, res) => {
  res.status(200).json(response.data);
});

app.get("/characters", async (req, res) => {
  const ts = uid2(8);
  const hash = md5(ts + api_private_key + api_public_key);

  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api_public_key}&hash=${hash}`
    );

    // .data : Zapper les attributs du wrapper response qui ne serviront pas (ex: code, status, etag...)
    // Voir Doc. Results : https://developer.marvel.com/documentation/apiresults
    res.status(200).json(response.data.data);
  } catch (error) {
    console.log(error);
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page doesn't exists!" });
});

app.listen(3001, () => {
  console.log("Server started on Port 3001");
});
