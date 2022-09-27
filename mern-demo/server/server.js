//express is used as middleware
const express = require("express");
const app = express();
//cors is used for smoother communciation btw different tech
const cors = require("cors");
require("dotenv").config({path:"./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
//get driver connection
const dbo = require("./db/conn");
app.listen (port, () => {
    //connects the app to database when server starts
    dbo.connectToServer(function(err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
});