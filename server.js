const express = require("express");
const app = express();
const mongoose = require("mongoose");

const register_otp_scema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  payload: {
    type: Object,
    required: true,
  },
  expireAt: {
    type: Date,
    default: () => new Date(Date.now() + 60000),
  },
});
const register_otp_model = mongoose.model(
  "register_otp_model",
  register_otp_scema
);

app.use("/", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/shamimsherpur");
  console.log("databaseconnect");
  

  let responsed = await register_otp_model.findOne({
    email: "shamimranaprofesstional@gmail.com",
  });

  console.log(responsed);

  res.json({ name: "shamim" });
});

app.listen(742, () => {
  console.log("server is running on port http://localhost:742");
});
