const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const uri = process.env.MONGO_URI;

  console.log("URI =", uri);

  await mongoose.connect(uri);

  console.log("Connected to MongoDB");
}

module.exports = main;