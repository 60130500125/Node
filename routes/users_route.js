const express = require("express");
const connection = require("../config/connection_database");
const { getUser, addUser } = require("../controllers/users_controller");

const router = express.Router();

router.get("/", getUser);

router.post("/", addUser);

module.exports = router;
