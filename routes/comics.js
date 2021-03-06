const express = require("express");
const router = express.Router();
const axios = require("axios");
const md5 = require("md5");
const uid2 = require("uid2");

// API Key Marvel
const api_public_key = process.env.MARVEL_API_PUBLIC_KEY;
const api_private_key = process.env.MARVEL_API_PRIVATE_KEY;

router.get("/comics", async (req, res) => {
  try {
    const ts = uid2(8);
    const hash = md5(ts + api_private_key + api_public_key);

    const { limit, offset, orderBy } = req.query;
    let search = "";
    req.query.titleStartsWith === undefined
      ? (search = "")
      : (search = "&titleStartsWith=" + req.query.titleStartsWith);

    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?limit=${limit}&offset=${offset}&orderBy=${orderBy}${search}&ts=${ts}&apikey=${api_public_key}&hash=${hash}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
