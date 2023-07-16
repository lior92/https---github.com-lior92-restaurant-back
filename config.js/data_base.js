const mongoose = require("mongoose");

const url = process.env.DATA_BASE || "mongodb://127.0.0.1:27017/main";

mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("connection to database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;

