require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts.routes.js");
const userRoutes = require("./routes/user.routes.js");
const CORS_Middleware = require("./middlewares/cross-origin-resource-sharing.js");
const path = require("path");
const Cors = require("cors");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mean-app:" +
      process.env.MONGO_ATLAS_PW +
      "@pallav.njiyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoose connected ");
  })
  .catch((err) => {
    console.log(` an error occured : ${err}`);
  });

app.use(express.json({ limit: "5000mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 500000000,
  })
);

app.use(CORS_Middleware);
app.use("/images", express.static(path.join(__dirname, "public/images")));
// app.use("/", express.static(path.join(__dirname, "angular")));
// ----------------------------- BOUNDARY ---------------------------------//
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.get("/login", (req, res) => {
  res.redirect("/");
});
app.get("/signin", (req, res) => {
  res.redirect("/");
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "angular", "index.html"));
//   next();
// });
module.exports = app;
