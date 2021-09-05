//require("dotenv").config();
const express = require('express');
const app = express();
const http = require("http").Server(app);
const mongoose = require('mongoose');
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const statsRoutes = require("./routes/stats");
//const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");

const PORT = process.env.PORT || 5500;

const whitelist = [
  "http://localhost:5500",
  "http://localhost:5500",
  "https://whist-cards.herokuapp.com"
  
  ,
];

mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://valeria:valeria@whistdb.8lsfw.mongodb.net/whistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));
  
  //app.use(cors());

  app.use(express.json());// make incoming data as json
  app.use(favicon(path.join(__dirname, "client/build", "favicon.ico")));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.use("/api/products/", productRoutes );
  app.use("/api/orders/", orderRoutes );
  app.use("/api/stats/", statsRoutes );

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });

  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")));
    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
  }

app.listen(PORT, () => console.log(`Server run on port ${PORT}`));