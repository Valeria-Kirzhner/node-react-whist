require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require("./routes/productRoutes");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

  app.use(express.json());// make incoming data as json

  app.use("/api/products", productRoutes );

  

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));