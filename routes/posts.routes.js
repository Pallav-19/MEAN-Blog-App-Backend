const express = require("express");
const router = express.Router();
const CORS_Middleware = require("../middlewares/cross-origin-resource-sharing");
const {
  addPost,
  getPost,
  deletePost,
  editPost,
  getPostById,
} = require("../controllers/post/posts.controller.js");
const imageUpload = require("../middlewares/imageUpload.js");
const checkAuth = require("../middlewares/check-auth.js");
router.get("/:id", CORS_Middleware, getPostById);

router.post("", CORS_Middleware, checkAuth, imageUpload, addPost);

router.get("", CORS_Middleware, getPost);
router.delete("/:id", CORS_Middleware, checkAuth, deletePost);

router.patch("/:id", CORS_Middleware, checkAuth, imageUpload, editPost);

module.exports = router;
