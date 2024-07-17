const router = require("express").Router();
const Post = require("../../models/Post");
const { withAuth } = require("../../utils/auth");
//routes

//GET ALL POSTS
//http://localhost:3001/api/posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST
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



//UPDATE A POST
//http://localhost:3001/api/posts/{value supplied}
router.put("/:id", async (req, res) => {
  try {
    //req.params = {id: 1}
    //what if the user just wants to update title, constent?? update both

    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE A POST
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id
      },
    });
    /////res and catch and res as above
  }
})
