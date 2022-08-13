const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://zesty-cascaron-faebd4.netlify.app/"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
module.exports = router;
