const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  log(getPassword());
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

function getPassword() {
  return "123456";
}

function log (message) {
  console.log(message);
}