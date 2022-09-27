//express is used as middleware
import express, { json } from "express";
const app = express();
//cors is used for smoother communciation btw different tech
import cors from "cors";
require("dotenv").config({path:"./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());
app.use(require("./routes/record"));
//get driver connection
import { connectToServer } from "./db/conn.js";
app.listen(port, () => {
    //connects the app to database when server starts
    connectToServer(function(err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
});