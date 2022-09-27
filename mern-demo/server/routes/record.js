const express = require("express");

//an express router instance will be used as the middleman (middleware)
//takes control of all requests starting with "/record"
const recordRoutes = express.Router();

//use the functions given by .conn file to connect to the database
const dbo = require("../db/conn");

//convert id from string to id for "_id"
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(function (res, request) {
    let db_connect = dbo.getDb("employees");
    //gets the employee-records and converts what it finds to list
    db_connect.collection("records").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//the following statements basically initialize and route different actions via requests

//get individual records
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let query = {_id: ObjectId(req.params.id)};
    db_connect.collection("records").findOne(query, function (result, err) {
        if (err) throw err;
        res.json(result);
    });
});
//add instance
recordRoutes.route("/record/add").get(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection("records").insertOne(myobj, function(result, err) {
        if (err) throw err;
        response.json(result);
    });
});
//update one instance
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myQuery = {_id: ObjectId(req.params.id)};
    let newValues = {
        $set: {
            name:req.body.name,
            position:req.body.position,
            level: req.body.level,
        },
    };
    db_connect.collection("records").updateOne(myQuery, function(obj, err) {
        if (err) throw err;
        response.json(obj);
    });
});
//delete one instance
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myQuery = {_id: ObjectId(req.params.id)};
    db_connect.collection("records").deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        response.json(obj);
    });
});

//when this file is imported the router is what it gets
module.exports = recordRoutes;
