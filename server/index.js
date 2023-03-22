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

// app.get("/trending", (req, res) => {
//   // res.json({ "movies" : "Damage" });
//   console.log(__dirname);
//   fetch(`${mdbAPIURL}/trending/all/day?api_key=${mdbAPIKey}`)
//     .then(response => response.json())
//     .then(data => res.json(data));
// });

// For the static resources like jpgs...
app.use(express.static(path.resolve(`${__dirname}/../client/src/bootstrap_files`)));

app.get("/", async (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/src/bootstrap_files/index.html`))
});

app.get("/trending", async (req, res) => {
  // res.json({ "movies" : "Damage" });
  const response = await fetch(`${mdbAPIURL}/trending/all/day?api_key=${mdbAPIKey}`);
  const data = await response.json();
  // return res.json(data);
  res.send(data);
});

app.post("/search", async (req, res) => {
  console.log('body: ' + req.body);
  const response = await fetch(`${mdbAPIURL}/search/multi?api_key=${mdbAPIKey}&query=Damage`);
  const data = await response.json();
  res.send(data);
  // res.send('ataatatat');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});