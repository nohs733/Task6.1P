const express = require("express");
const homeRouter = express.Router();

const {geHome, getRegister, getHome} = require("../controllers/homeController");

homeRouter.get("/", getHome);
homeRouter.get("/register", getRegister);

module.exports = homeRouter;