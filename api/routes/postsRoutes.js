const express = require('express');
const Post = require('../models/Product.js');
const config = require("csvtojson");

const router = express.Router();
const csvtojson = require("csvtojson");

router.post('/add', async (req,res) => {
    csvtojson()
        .fromFile("posts.csv")
        .then(csvData => {
            console.log(csvData);
            Post.insertMany(csvData).then(function(){
                console.log("Data inserted")
                res.json({success: 'success'});
            }).catch(function (error){
                console.log(error)
            });
        });
});

module.exports = router;