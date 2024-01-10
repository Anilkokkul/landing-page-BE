const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const { db } = require("./DB/db.connect");
const adminRoutes = require("./Routes/adminRoutes");

db();
const app = express();
app.use(express.json());
app.use(express.static("./"));
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://rainbow-sfogliatella-f84033.netlify.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
app.use(adminRoutes);
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
