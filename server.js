const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json({name: "shamim"});
});

app.listen(742, () => {
  console.log("server is running on port http://localhost:742");
});
