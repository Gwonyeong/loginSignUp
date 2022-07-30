"use strict";//ES를 준수하겠다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello) ;
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;