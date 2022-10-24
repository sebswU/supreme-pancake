//import express and cors, create express application
//express app will have path called ./routes
const express = require("express");
const app = express();
const cors = require("cors");
//get the port from .env
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
//express.use() on cors and express.json class
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
//use listen callback function to connect to server
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});