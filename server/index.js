const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.get('/movies', (req, res) => {
  res.json({ "movies" : "Damage" });
  console.log(__dirname);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});