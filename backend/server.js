const express = require("express");
const { PORT } = require("./libs/config");
const mongoose = require("./database/config");
const exp = require("constants");

const app = express();
app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
