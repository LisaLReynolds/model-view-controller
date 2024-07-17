const router = require("express").Router();
const Post = require("../../models/Post");
const { withAuth } = require("../../utils/auth");
//routes

//http://localhost:3001/api/posts
router.post("/", withAuth, async (req, res) => {
  try {
    //create a new post
    const newPost = await Post.create(req.body);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
