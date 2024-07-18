const router = require("express").Router()
const Comment = require("../../models/Comment")


//CREATE A COMMENT
router.post("/", async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);

        res.status(200)
    } catch 
})
