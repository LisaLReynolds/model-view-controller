const router = require("express").Router();
const Post = require("../../models/Post");

//routes

//http://localhost:3001/api/posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
