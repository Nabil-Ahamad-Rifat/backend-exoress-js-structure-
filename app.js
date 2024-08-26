// const {router} = require("express/lib/application");
const express = require('express');
const router = require("./src/routes/api");

// const router = require('./src/routes/api');
const app = new express();




app.use("/",router)

// undefine route
// app.use('*',()=>{
//     res.status(404)..json(status:"failed", data:"not found");
// })





module.exports= app;