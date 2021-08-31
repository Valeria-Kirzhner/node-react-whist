require("dotenv").config();
const express = require('express');
const app = express();
const http = require("http").Server(app);
const mongoose = require('mongoose');
const productRoutes = require("./routes/products");


const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

  app.use(express.json());// make incoming data as json

  app.use("/api/products/", productRoutes );

  

app.listen(PORT, () => console.log(`Server run on port ${PORT}`));