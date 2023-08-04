const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { CLIENT_URL } = require("./config/config");
require("dotenv").config();

const PORT = process.env.PORT || 5555;
const app=express();


// --------------- Connect to MongoDB ---------------
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => console.error(err));

// --------------- Listen to given PORT ---------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});