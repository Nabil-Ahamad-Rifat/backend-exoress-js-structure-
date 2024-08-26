const express = require("express");

const controller= require("../controller/controller");

const router = express.Router();




router.get("/home",controller.home);

router.get("/about",controller.about);

router.get("/contact",controller.contact);

router.get("/file",controller.file);

router.get('/homeGet',controller.hello);
router.post('/homepost',controller.hello);



module.exports= router;