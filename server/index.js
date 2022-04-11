/*
 Add '"type": "module"' to package.json in order to be able to use
 import statements (es6) as opposed to const express = require('express'),
 which is used in commonjs. 
*/
import express from "express";
import path, { dirname } from "path"; // __dirname only exists in commonJS modules. Workaround for ES6 modules.
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import { config } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

const mdbAPIKey = config.MOVIE_API_KEY;
const mdbAPIURL = "https://api.themoviedb.org/3";

app.get("/trending", (req, res) => {
  console.log("req:" + req.body);
  // res.json({ "movies" : "Damage" });
  console.log(__dirname);
  fetch(`${mdbAPIURL}/trending/all/day?api_key=${mdbAPIKey}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});