const router = require("express").Router();
const Post = require("../models/Post");

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData);

    //Serializes your data objects

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
    console.log(posts);

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
