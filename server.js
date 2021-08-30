require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));


  

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));