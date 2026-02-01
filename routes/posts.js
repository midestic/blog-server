const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  getAllPosts,
  getPostById,
  createPost,
  addComment,
  getComments,
} = require("../controller/postController");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", upload.single("image"), createPost);

router.post("/:id/comments", addComment);
router.get("/:id/comments", getComments);

module.exports = router;
