const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/user/index.js");
const CORS_Middleware = require("../middlewares/cross-origin-resource-sharing");
router.post("/signup", CORS_Middleware, signup);
router.post("/login", CORS_Middleware, login);

module.exports = router;
